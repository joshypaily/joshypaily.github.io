'use client';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '@/component/Header';
import FullCard from '@/component/MainCardPost';
import CardPost from '@/component/CardPost';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const mainCardPost = {
  title: '',
  description:
    `5 years experienced software engineer with a demonstrated history of working in the information technology and services industry. Experience in Java, Kotlin, spring boot, micro service.Possessing expertise in developing applications comprehensively, spanning from user interface to backend implementation. Strong experience in all layers from UI to database, system design, system analysis & implementation with clean code guidelines.`,
    backgroundImage: 'https://source.unsplash.com/random?wallpapers',
};

const cardPosts = [
  {
    title: 'Senior software engineer(21/02/2022 to Till date)',
    subTitle: 'IBS software, Carnival infopark, Kochi, Kerala, India.',
    description:
      [
        'Got Team champion, Department champion and Debutant awards.',
      ],
    backgroundImage: 'https://source.unsplash.com/random?wallpapers',
  }, {
    title: 'Software Engineer (14/10/2020 to 18/02/2022)',
    subTitle: 'Pinmicro India Pvt Ltd, Infopark phase 2, Transasia building, Kochi, Kerala, India.',
    description:
      ['Contributed in R&D projetcs'],
    backgroundImage: 'https://source.unsplash.com/random?wallpapers',
  }, {
    title: 'Software Engineer (03/09/2018 to 13/10/2020)',
    subTitle: ' Indocosmo Systems Pvt Ltd, Kadavanthra,  Kochi, Kerala, India.',
    description:
      ['Worked as a full stack developer'],
    backgroundImage: 'https://source.unsplash.com/random?wallpapers',
  }
];

const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Joshy Paily- Senior Software enginner" />
        <main>
          {/* <FullCard post={mainCardPost} /> */}
          <Grid container spacing={4}>
            {cardPosts.map((post) => (
              <CardPost key={post.title} post={post} />
            ))}
          </Grid>
  
          
        </main>
      </Container>
    </ThemeProvider>
  );
}