import React, { useState } from "react";

import { ThemeProvider , Box, createTheme, Card, Container, CssBaseline, Grid, Typography, Stack, Button , Modal ,LinearProgress } from "@mui/material";

import { Link as MUILink } from "@mui/material";

import AddPoll from "../../components/Modals/AddPoll";

const theme = createTheme();


export default function BookClubPageTemp(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [progress, setProgress] = React.useState(0);

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container  maxWidth="lg">
                        
                        <Grid container spacing={4}>
                            <Typography gutterBottom variant="h2">
                                Book Club Poll
                            </Typography>
                            
                            <Box sx={{ width: '100%' , pb : 2}}>
                                <Typography> Book 1 : 5%</Typography>   
                                <LinearProgress variant="determinate" value={5} />
                            </Box>
                            <Box sx={{ width: '100%' , pb : 2}}>
                                <Typography> Book 2 : 65%</Typography>   
                                <LinearProgress variant="determinate" value={65} />
                            </Box>
                            <Box sx={{ width: '100%' , pb : 2}}>
                                <Typography> Book 3 : 12%</Typography>   
                                <LinearProgress variant="determinate" value={12} />
                            </Box>
                            <Box sx={{ width: '100%' , pb : 2}}>
                                <Typography> Book 4 : 11%</Typography>   
                                <LinearProgress variant="determinate" value={11} />
                            </Box>
                            <Box sx={{ width: '100%' , pb : 2}}>
                                <Typography> Book 5 : 7%</Typography>   
                                <LinearProgress variant="determinate" value={7} />
                            </Box>
                        
                        </Grid>
                    </Container>
                    <Container sx={{ py: 8 }} maxWidth="lg" >
                        <Grid container spacing={4}>
                            <Button onClick={handleOpen}>Create Poll</Button>
                        </Grid>
                    </Container>
                </Box>

            </main>
            <AddPoll open={open} setOpen={setOpen}/>
        </ThemeProvider>
    );
    
}
