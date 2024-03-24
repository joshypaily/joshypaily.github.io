'use client';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FullCard from '@/component/MainCardPost';
import CardPost from '@/component/CardPost';
import Main from '@/component/Main';
import Footer from '@/component/Footer';
import Header from '@/component/Header';

const mainCardPost = {
  title: 'About',
  description:
    `5 years experienced software engineer with a demonstrated history of working in the information technology and services industry. Experience in Java, Kotlin, spring boot, micro service.Possessing expertise in developing applications comprehensively, spanning from user interface to backend implementation. Strong experience in all layers from UI to database, system design, system analysis & implementation with clean code guidelines.`,
  image: 'https://source.unsplash.com/random?wallpapers',
  //imageText: 'main image description',
  //linkText: 'Continue reading…',
};

const cardPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];


const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Joshy Paily- Senior Software enginner" />
        <main>
          <FullCard post={mainCardPost} />
          <Grid container spacing={4}>
            {cardPosts.map((post) => (
              <CardPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description=""
      />
    </ThemeProvider>
  );
}

