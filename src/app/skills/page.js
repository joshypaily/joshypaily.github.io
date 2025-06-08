"use client";

import * as React from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Skills() {
  return (
    <Container
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
      <div sx={{ flexGrow: 1 }}>
        <div container spacing={6}>
          {skills.map((skill) => (
            // <Background key={skill.heading}>
              <div size={{ xs: 6, md: 2 }}>
                <div sx={{ m: 1 }} variant="h5" component="div">
                  {skill.heading}
                </div>
                {/* <Background> */}
                <ListGroup >
                  {skill.items.map((item) => (
                    <ListGroup.Item key={item.name}>
                      {/* <ListItemIcon>
                        <CodeIcon sx={{ mr: 1 }} />
                      </ListItemIcon>
                      <ListItemText primary={item.name} /> */}
                      {item.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                {/* </Background> */}
              </div>
            // </Background>
          ))}
        </div>
      </div>
    </Container>
  );
}

const skills = [
  {
    heading: "Web Technologies",
    items: [
      {
        name: "Java"
      },
      {
        name: "Kotlin"
      },
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
