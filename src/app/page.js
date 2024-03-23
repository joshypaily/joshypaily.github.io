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

const mainCardPost = {
  title: '',
  description:
    `5 years experienced software engineer with a demonstrated history of working in the information technology and services industry. Experience in Java, Kotlin, spring boot, micro service.Possessing expertise in developing applications comprehensively, spanning from user interface to backend implementation. Strong experience in all layers from UI to database, system design, system analysis & implementation with clean code guidelines.`,
  image: '/bg.avif',
};


const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Joshy Paily- Senior Software enginner" />
        <main>
          <MainCardPost post={mainCardPost} />
        </main>
      </Container>
    </ThemeProvider>
  );
}

