"use client";


import CardPost from "@/component/CardPost";
import React from "react";
import { Card, Container } from 'react-bootstrap';
import './achievements.css'


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
    <Container fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
      <div className="main-timeline">
        <div className="timeline left">
          <Card>
            <Card.Body className="p-4">
              <h3>2017</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="timeline right">
          <Card>
            <Card.Body className="p-4">
              <h3>2016</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="timeline left">
          <Card>
            <Card.Body className="p-4">
              <h3>2015</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="timeline right">
          <Card>
            <Card.Body className="p-4">
              <h3>2012</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="timeline left">
          <Card>
            <Card.Body className="p-4">
              <h3>2011</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="timeline right">
          <Card>
            <Card.Body className="p-4">
              <h3>2007</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
