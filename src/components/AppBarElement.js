import React from "react";
import { useNavigate} from "react-router-dom";

import { auth ,logout } from "../firebase";

import {
  AppBar, 
  Toolbar, 
  Button, 
  IconButton ,
  Box ,
  Typography ,
  Container ,
  Card ,
  CardContent , 
  shadows } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import {Link as MUILink} from '@mui/material';
import { useAuthState } from "react-firebase-hooks/auth";


export default function AppBarElement() {
    const [user, loading, error] = useAuthState(auth);
    let login_logout_btn = '';
    const navigate = useNavigate();
    if(user){
        login_logout_btn = <Button color="inherit" onClick = { function(e){ logout(); navigate('/signin');}}> Logout</Button>;
    }
    else{
        login_logout_btn = <Button color="inherit" onClick = { (e) => navigate('/signin')} >Login</Button>;
    }

    return <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    BookTubes.club
                </Typography>
                {login_logout_btn}
                </Toolbar>
            </AppBar>
            </Box>
        </React.Fragment>
    ;
}
