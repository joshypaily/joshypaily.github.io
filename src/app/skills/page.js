"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/code";
import Container from "@mui/material/Container";

const Background = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));

export default function Skills() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          {skills.map((skill) => (
            <Background key={skill.heading}>
              <Grid size={{ xs: 12, md: 2 }}>
                <Typography sx={{ m: 1 }} variant="h5" component="div">
                  {skill.heading}
                </Typography>
                {/* <Background> */}
                <List>
                  {skill.items.map((item) => (
                    <ListItem key={item.name}>
                      <ListItemIcon>
                        <CodeIcon sx={{ mr: 1 }} />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </List>
                {/* </Background> */}
              </Grid>
            </Background>
          ))}
        </Grid>
      </Box>
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
