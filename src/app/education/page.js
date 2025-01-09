"use client";

import Grid from "@mui/material/Grid";
import CardPost from "@/component/CardPost";
import { Container } from "@mui/material";

const cardPosts = [
  {
    key: "cardPost1",
    title: "BACHELOR OF TECHNOLOGY(2014-2018)",
    subTitle:
      "Sree Narayana Gurukulam College of Engineering Kadayiruppu, Kolenchery, Kerala, India",
    description: [
      "Studied computer science and engineering.",
      "Coordinated college Techfest registration desk and developed a website for techfest",
      "Coordinated Hacktrix-2017, an ethical hacking workshop."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost2",
    title: "HIGHER SECONDARY(2012-2014)",
    subTitle: "St.Johns Syrian HSS vadakara, Oliyappuram, Kerala, India.",
    description: ["Studied Biology Science."],
    backgroundImage: "https://source.unsplash.com/random?wallpapers",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost3",
    title: "10th/SSLC (2011-2012",
    subTitle: "High School Koothattukulam, Kerala, India",
    description: [],
    backgroundImage: "https://source.unsplash.com/random?wallpapers",
    isMoreInfoLinkRequired: false
  }
];

export default function Education() {
  return (
    <Container
    maxWidth="lg"
    component="main"
    sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}>
      <Grid container spacing={6}>
        {cardPosts.map((post) => (
          <CardPost key={post.title} post={post} />
        ))}
      </Grid>
    </Container>
  );
}
