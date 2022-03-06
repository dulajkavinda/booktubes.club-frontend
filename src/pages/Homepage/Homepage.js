import React, { useEffect, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  CardActions,
} from "@mui/material";

import { Link as MUILink } from "@mui/material";
import CountUp from "react-countup";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const theme = createTheme();
const cards = [1, 2, 3, 4, 5, 6];
const countcards = [1, 2, 3];

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to BookTubes.club
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Join Book clubs from all around the world. Virtually.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">
                {" "}
                <MUILink href="/signup" color="#fff" variant="inherit">
                  Let's get started
                </MUILink>
              </Button>
              <Button variant="outlined">
                <MUILink href="/how">How ?</MUILink>
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {countcards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#1976d2",
                    color: "white",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <CountUp
                        start={0}
                        end={100}
                        duration={1}
                        separator=" "
                        decimals={0}
                        decimal=","
                        prefix=""
                        suffix="+"
                        onEnd={() => ""}
                        onStart={() => ""}
                      />
                    </Typography>
                    <Typography>Members joined</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Recent Book Clubs
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <LocalLibraryIcon sx={{ mt: 2, ml: 2 }} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Book Club #{Math.floor(100000 + Math.random() * 9000)}
                    </Typography>
                    <Typography>Lorem ipsum dolor sit amet</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Request to join</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          boooktubes.club
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Copyright © 2022 booktubes.club . All Rights Reserved
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
