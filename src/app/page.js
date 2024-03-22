'use client';

import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MainCardPost from '@/component/MainCardPost';
// import CardPost from '@/component/CardPost';
// import Main from '@/component/Main';
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


// const mainCardPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'main image description',
//   linkText: 'Continue reading…',
// };

// const cardPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
// ];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Joshy Paily- Senior Software enginner" />
        <main>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Item>
              <img
                srcSet={`/joshy.jpeg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`/joshy.jpeg?w=164&h=164&fit=crop&auto=format`}
                style={{maxWidth : '100%'}}
                loading="lazy"
              />
              </Item>
            </Grid>
            <Grid xs={8}>
              <Item style={{minHeight : '100%'}}>Hi there, my name is Josy Paily<br/>
              Im working as Senior Software enginner with  5+ years of diversified experience in web application development using Java & Kotlin technologies. Strong experience in all layers from UI to database, system design, system analysis & implementation with clean code guidelines.
              </Item>
            </Grid>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}

