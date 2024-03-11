'use client';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '@/component/MainFeaturedPost';
import FeaturedPost from '@/component/FeaturedPost';
import Main from '@/component/Main';
import Footer from '@/component/Footer';
import Header from '@/component/Header';

const defaultTheme = createTheme();

export default function Achievements() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
        <main>
        My achievements are as follows....
        </main>
      </Container>
      <Footer
        title=""
        description=""
      />
    </ThemeProvider>
  );
   
}