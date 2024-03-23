'use client';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '@/component/Header';
import CircularProgress from '@mui/material/CircularProgress';



const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Joshy Paily- Senior Software enginner" />
        <main>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          flexDirection = "row"
          sx={{ minHeight: '59vh' }}
        >
          <Grid item xs={4} >
            <h1>Site under construction</h1>
          </Grid>
          <Grid item xs={1}>
            <CircularProgress />
          </Grid>
        </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}