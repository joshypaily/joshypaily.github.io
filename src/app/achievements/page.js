"use client";

import Grid from "@mui/material/Grid2";
import CardPost from "@/component/CardPost";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses
} from "@mui/lab/TimelineOppositeContent";

const cardPosts = [
  {
    key: "cardPost-Hacktrix-2017",
    year: "2017",
    title: "Hacktrix-2017",
    subTitle: "",
    description: ["Coordinated Hacktrix-2017, an ethical hacking workshop."],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost22013",
    year: "2013",
    title: "Web designing competation",
    subTitle: "",
    description: [
      "Participated in web designing competition in 5th Ernakulam revenue district school Kalolsavam 2013."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost1-web-design2013",
    year: "2013",
    title: "Web Designing Competation",
    subTitle: "First prize",
    description: [
      "Secured 1st prize for web designing competition in koothattukulam sub-district IT fair conducted on 2013."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost22012",
    year: "2012",
    title: "Web designing competation",
    subTitle: "",
    description: [
      "Participated in web designing competition in 4th Ernakulam revenue district school  Kalolsavam 2012."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost1-web-design2012",
    year: "2012",
    title: "Web Designing Competation",
    subTitle: "First prize",
    description: [
      "Secured 1st prize for web designing competition in koothattukulam sub-district IT fair conducted on 2012."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  },
  {
    key: "cardPost1-web-design2011",
    year: "2011",
    title: "Web Designing Competation",
    subTitle: "First prize",
    description: [
      "Secured 1st prize for web designing competition in koothattukulam sub-district IT fair conducted on 2011."
    ],
    backgroundImage: "/bg.avif",
    isMoreInfoLinkRequired: false
  }
];

export default function Education() {
  return (
    <main>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2
          }
        }}>
        {cardPosts.map((post) => (
          <TimelineItem key={post.key}>
            <TimelineOppositeContent>{post.year}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot /> <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Grid container spacing={6}>
                <CardPost key={post.title} post={post} />
              </Grid>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </main>
  );
}
