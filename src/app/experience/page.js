"use client";

import Grid from "@mui/material/Grid";
import CardPost from "@/component/CardPost";
import { Container } from "@mui/material";

const cardPosts = [
  {
    key: "cardPost1",
    title: "Senior software engineer(21/02/2022 to Till date)",
    subTitle: "IBS software, Carnival infopark, Kochi, Kerala, India.",
    description: [
      "Honored with the Debutant award.",
      "Received Customer Champion award",
      "Received the Department Champion Award.",
      "Received Team Champion Award(4 times)",
      "Received appreciation from customers.",
      "Designed and implemented a GRPC endpoint within an established microservice architecture.",
      "Contributed in Identity and Access Management(IAM) service enhancements and migration initiatives."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost2",
    title: "Software Engineer (14/10/2020 to 18/02/2022)",
    subTitle: "Pinmicro India Pvt Ltd, Infopark phase 2, Kochi, Kerala, India.",
    description: [
      "Designed and implemented a middleware solution to seamlessly integrate two distinct third-party IoT clouds with the current RTLS infrastructure, resulting in revenue growth for the company and the acquisition of additional clients.",
      "Developed MQTT messaging integration for Ultra Wide Band technology.",
      "Conducted R&D for a middleware for integrating face detection cameras into the existing RTLS and access control systems. Successfully integrated two different camera systems into RTLS."
    ],
    backgroundImage: "https://source.unsplash.com/random?wallpapers",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost3",
    title: "Software Engineer (03/09/2018 to 13/10/2020)",
    subTitle: " Indocosmo Systems Pvt Ltd, Kadavanthra,  Kochi, Kerala, India.",
    description: [
      "Worked as a full stack developer",
      "Conducted R&D and developed a chat application using websocket.",
      "Developed a dynamic chat allocation algorithm for allocating a customer chat to the product support person having less number of concurrent chatting windows."
    ],
    backgroundImage: "https://source.unsplash.com/random?wallpapers",
    isMoreInfoLinkRequired: false
  }
];

export default function Experience() {
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
