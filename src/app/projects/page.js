"use client";

import CardPost from "@/component/CardPost";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardPosts = [
  {
    key: "cardPost1",
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
    key: "cardPost2",
    title: "More projects added later",
    subTitle: "",
    description: ["Development inprogress. Stay tuned.."],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  }
];

export default function Experience() {
  return (
    <Container
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
        <Row>
          {cardPosts.map((post) => (
            <CardPost key={post.title} post={post} />
          ))}
        </Row>
    </Container>
  );
}
