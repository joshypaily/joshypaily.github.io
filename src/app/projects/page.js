"use client";

import Grid from "@mui/material/Grid";
import CardPost from "@/component/CardPost";

const cardPosts = [
  {
    key: "cardPost1",
    title: "Senior software engineer(21/02/2022 to Till date)",
    subTitle: "IBS software, Carnival infopark, Kochi, Kerala, India.",
    description: [
      "Got Debutant Award",
      "Got Department Champion Award",
      "Got Team Champion Award",
      "Got customer Appreciation",
      "Architected and created a GRPC endpoint for an existing micro service",
      "Contributed in IAM services and migration works"
    ],
    backgroundImage: "/bg.avif"
  },
  {
    key: "cardPost2",
    title: "Software Engineer (14/10/2020 to 18/02/2022)",
    subTitle: "Pinmicro India Pvt Ltd, Infopark phase 2, Kochi, Kerala, India.",
    description: [
      "Contributed in R&D projetcts",
      "Developed a middleware for integrating two different third party IOT clouds into the existing RTLS which increased the revenue of the company and added more clients.",
      "Developed MQTT messaging integration for Ultra Wide Band technology.",
      "Done R&D for a middleware used for integrating face detection cameras into the existing RTLS and access control. Successfully integrated two different cameras into RTLS."
    ],
    backgroundImage: "https://source.unsplash.com/random?wallpapers"
  },
  {
    key: "cardPost3",
    title: "Software Engineer (03/09/2018 to 13/10/2020)",
    subTitle: " Indocosmo Systems Pvt Ltd, Kadavanthra,  Kochi, Kerala, India.",
    description: [
      "Worked as a full stack developer",
      "Done R&D and developed a chat application using websocket.",
      "Developed a dynamic chat allocation algorithm for allocating a customer chat to the product support person having less number of concurrent chatting windows."
    ],
    backgroundImage: "https://source.unsplash.com/random?wallpapers"
  }
];

export default function Experience() {
  return (
    <main>
      <Grid container spacing={6}>
        {cardPosts.map((post) => (
          <CardPost key={post.title} post={post} />
        ))}
      </Grid>
    </main>
  );
}
