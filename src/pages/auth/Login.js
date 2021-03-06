import React, { useEffect, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  shadows,
} from "@mui/material";
import { Link as MUILink } from "@mui/material";
import GoogleButton from "react-google-button";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  sendPasswordReset,
} from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";

const theme = createTheme();

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const setUser = useStoreActions((actions) => actions.setUser);
  const router = useRouter();

  const admins_uids = [
    'llXdgJrF0JUKuBY9HH85',
    'qtVlOoRwR1Ta40kxu6nerk31VrF2',
  ]

  useEffect(() => {
    if (loading) {
      // trigger loading screen
      return;
    }
    if (user) {
      setUser(user);
      if(admins_uids.includes(user.uid)){
        router.push("/Admin/AdminDashboard");        
      }
      else{
        router.push("/Dashboard/Dashboard");
      }

    }
  }, [user, loading]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography
          component="h1"
          variant="h3"
          sx={{ fontWeight: "regular", textAlign: "center", marginTop: 15 }}
        >
          booktubes.club
        </Typography>
        <CssBaseline />
        <Card
          sx={{
            marginTop: 8,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            boxShadow: 4,
          }}
        >
          <CardContent>
            <Typography component="h2" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Button > Forgot Password ?</Button> */}
                  <MUILink href="#" variant="body2" onClick={ () => sendPasswordReset(email.toString())}>
                    Forgot password?
                  </MUILink>
                </Grid>
                <Grid item>
                  <MUILink href="/signup" variant="body2">
                    {"Sign Up"}
                  </MUILink>
                </Grid>
              </Grid>
              <Grid>
                <Typography
                  component="p"
                  sx={{ textAlign: "center", width: "100%", mt: 1, mb: 1 }}
                >
                  or
                </Typography>
              </Grid>
              <Grid>
                <GoogleButton
                  style={{ margin: "auto" }}
                  onClick={signInWithGoogle}
                />
              </Grid>
              <div>{(error)?'wrong' :''}</div>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
