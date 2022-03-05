import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
}  from "../../firebase";

import {
  createTheme, 
  ThemeProvider, 
  Button, 
  CssBaseline ,
  TextField ,
  FormControlLabel ,
  Checkbox ,
  Grid ,
  Box ,
  Typography ,
  Container ,
  Card ,
  CardContent , 
shadows } from '@mui/material';
import {Link as MUILink} from '@mui/material';
import GoogleButton from 'react-google-button';

const theme = createTheme();

export default function SignUp() {
  
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [name,setName] = useState("");
  const [user,loading,error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if(!name) alert('Please Enter Name');
    registerWithEmailAndPassword(name,email,password);
  };

  useEffect(()=>{
    if(loading) return;
    if(user) navigate('/dashboard');
  },[user,loading]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h3"  sx={{ fontWeight: 'regular',textAlign: 'center', marginTop:15 }}>
            BookTubes.club
        </Typography>
        <CssBaseline />
        <Card
          sx={{
            marginTop: 8,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height:'100%',
            boxShadow: 4,
          }}
        >
          <CardContent>
          <Typography component="h1" variant="h5" sx={{textAlign:'left',width:'100%',}}>
            Sign up
          </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={ (e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={ (e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick = {register}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <MUILink href="/signin" variant="body2">
                    Sign in
                  </MUILink>
                </Grid>
              </Grid>
              <Grid>
                <Typography component="p" sx={{textAlign:'center',width:'100%', mt:1, mb:1}}>
                  or
                </Typography>
              </Grid>
              <Grid>
                <GoogleButton style={{margin:"auto",}} onClick={signInWithGoogle}/>
              </Grid>
            </Box>
          </CardContent>
        </Card>
        
      </Container>
    </ThemeProvider>
  );
}