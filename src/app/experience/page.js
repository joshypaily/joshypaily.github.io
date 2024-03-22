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
          Experience
        </main>
      </Container>
    </ThemeProvider>
  );
}