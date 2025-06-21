"use client";

import * as React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Skills() {
  return (
    <Container as="main" className="my-5">
      <Row>
        {skills.map((skill) => (
          <Col key={skill.heading} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <div className="skill-card h-100 d-flex flex-column">
              <div className="h5 mb-3">{skill.heading}</div>
              <ListGroup className="flex-grow-1">
                {skill.items.map((item) => (
                  <ListGroup.Item key={item.name}>{item.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const skills = [
  {
    heading: "Languages",
    items: [
      {
        name: "Java"
      },
      {
        name: "Kotlin"
      },
      {
        name: "JavaScript"
      }
    ]
  },
  {
    heading: "DevOps",
    items: [
      {
        name: "Docker"
      },
      {
        name: "Kubernetes"
      },
      {
        name: "CI/CD"
      }
    ]
  },
  {
    heading: "Web Technologies",
    items: [
      {
        name: "HTML"
      },
      {
        name: "CSS"
      },
      {
        name: "JavaScript"
      }
    ]
  },
  {
    heading: "AWS",
    items: [
      {
        name: "EC2"
      },
      {
        name: "ECS"
      },
      {
        name: "S3"
      }
    ]
  },
  {
    heading: "Frameworks",
    items: [
      {
        name: "Spring Boot"
      },
      {
        name: "Spring MVC"
      }
    ]
  },
  {
    heading: "Databases",
    items: [
      {
        name: "MySQL DB"
      },
      {
        name: "MongoDB"
      }
    ]
  },
  {
    heading: "Monitoring tools",
    items: [
      {
        name: "Splunk"
      },
      {
        name: "Datadog"
      }
    ]
  },
  {
    heading: "Testing",
    items: [
      {
        name: "JUnit"
      },
      {
        name: "Mockito"
      }
    ]
  },
  {
    heading: "Message Brokers",
    items: [
      {
        name: "Kafka"
      },
      {
        name: "Apache ActiveMQ"
      }
    ]
  },
  {
    heading: "Platforms",
    items: [
      {
        name: "Ubuntu"
      },
      {
        name: "MacOS"
      },
      {
        name: "Windows"
      }
    ]
  },
  {
    heading: "APIs",
    items: [
      {
        name: "REST"
      },
      {
        name: "GraphQL"
      },
      {
        name: "GRPC"
      }
    ]
  },
  {
    heading: "Others",
    items: [
      {
        name: "Microservice"
      },
      {
        name: "Docker"
      },
      {
        name: "Git"
      }
    ]
  }
];
