'use client';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FullCard from '@/component/MainCardPost';
import Header from '@/component/Header';

const mainCardPost = {
  title: '',
  description:
    '5 years experienced software engineer with a demonstrated history of working in the information technology and services industry. Experience in Java, Kotlin, spring boot, micro service.Possessing expertise in developing applications comprehensively, spanning from user interface to backend implementation. Strong experience in all layers from UI to database, system design, system analysis & implementation with clean code guidelines.',
  backgroundImage: '/bg.avif',
  leftImageSrcSet: '/joshy.jpeg?w=164&h=164&fit=crop&auto=format&dpr=2 2x',
  leftImageSrc: '/joshy.jpeg?w=164&h=164&fit=crop&auto=format',
  isLeftImageRequired: true,
  leftMd: 4,
  rightMd: 8
};

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Header title="Joshy Paily- Senior Software enginner" />
      <main>
        <FullCard post={mainCardPost} />
      </main>
    </Container>
  );
}