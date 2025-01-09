"use client";
import FullCard from "@/component/MainCardPost";
import Container from "@mui/material/Container";

const mainCardPost = {
  title: "",
  description:
    "A software engineer with five years of experience, showcasing a proven track record in the information technology and services sector. Proficient in Java, Kotlin, Spring Boot and microservices with a knack for crafting applications from front-end to back-end. Possesses extensive expertise across all development layers, including UI, database, system design, analysis, and implementation, adhering to clean code principles.",
  backgroundImage: "/bg.avif",
  leftImageSrcSet: "/joshy.jpeg?w=164&h=164&fit=crop&auto=format&dpr=2 2x",
  leftImageSrc: "/joshy.jpeg?w=164&h=164&fit=crop&auto=format",
  isLeftImageRequired: true,
  leftMd: 4,
  rightMd: 8
};

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}>
      <FullCard post={mainCardPost} />
    </Container>
  );
}
