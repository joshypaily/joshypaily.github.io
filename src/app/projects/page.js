"use client";

import CardPost from "@/component/CardPost";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const cardPosts = [
  {
    key: "pub-sub-model",
    title: "A pub-sub model application using Apache ActiveMQ broker",
    subTitle:
      "A sample project to create MQTT(Message Queuing Telemetry Transport) messaging using spring boot and eclipse paho(java client). The apache-activemq-5.18.3 used as a message broker here.",
    description: [
      "There are two main components in this project",
      "MQTT publisher - It will keep publishing the messages to a topic in every 3 seconds.",
      "MQTT Subscriber - It will subscribe a given topic(in application.properties) when we run the application. The callback method will capture the incoming events and log into the console."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: true,
    moreInfoLink: {
      url: "https://github.com/joshypaily/spring-boot-mqtt-messaging",
      label: "See more -> github.com/joshypaily/spring-boot-mqtt-messaging"
    }
  },
  {
    key: "spring-scurity",
    title: "spring-security-role-based-authorization",
    subTitle: "A sample application to demonstrate role based authorization using spring security",
    description: [
      "This is a sample application to demonstrate role based authorization using spring security.",
      "There are two roles defined in this application, ADMIN and USER.",
      "The admin can access all the endpoints, but the user can only access the /user endpoint."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: true,
    moreInfoLink: {
      url: "https://github.com/joshypaily/spring-security-role-based-authorization",
      label: "See more -> github.com/joshypaily/spring-security-role-based-authorization"
    }
  },
  {
    key: "More projects in the github",
    title: "Check more on my github account",
    subTitle: "",
    description: [],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: true,
    moreInfoLink: {
      url: "https://github.com/joshypaily?tab=repositories",
      label: "See more -> https://github.com/joshypaily?tab=repositories"
    }
  }
];

export default function Experience() {
  return (
    <Container component="main" sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}>
      <Row>
        {cardPosts.map((post) => (
          <CardPost key={post.title} post={post} />
        ))}
      </Row>
    </Container>
  );
}
