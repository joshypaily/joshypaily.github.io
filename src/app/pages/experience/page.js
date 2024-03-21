'use client';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainCardPost from '@/component/MainCardPost';
import CardPost from '@/component/CardPost';
import Main from '@/component/Main';
import Footer from '@/component/Footer';
import Header from '@/component/Header';

const defaultTheme = createTheme();

export default function Experience() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        Experience

        </main>
      </Container>
      <Footer
        title=""
        description=""
      />
    </ThemeProvider>
  );
   
}