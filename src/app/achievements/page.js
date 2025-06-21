"use client";

import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import "./achievements.css";

const cardPosts = [
  {
    key: "cardPost-Hacktrix-2017",
    year: "2017",
    title: "Hacktrix-2017",
    subTitle: "",
    description: ["Coordinated Hacktrix-2017, an ethical hacking workshop."],
    backgroundImage: "/achievement/hacktrix.jpg",
    isMoreInfoLinkRequired: false,
    viewMoreImageLink: ""
  },
  {
    key: "cardPost22013",
    year: "2013",
    title: "Web designing competation",
    subTitle: "",
    description: [
      "Participated in web designing competition in 5th Ernakulam revenue district school Kalolsavam 2013."
    ],
    backgroundImage: "/achievement/default.png",
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
    backgroundImage: "/achievement/default.png",
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
    backgroundImage: "/achievement/default.png",
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
    backgroundImage: "/achievement/default.png",
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
    backgroundImage: "/achievement/default.png",
    isMoreInfoLinkRequired: false
  }
];

export default function Achievements() {
  const [modalShow, setModalShow] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const handleShowModal = (imgUrl) => {
    setModalImg(imgUrl);
    setModalShow(true);
  };
  const handleCloseModal = () => setModalShow(false);

  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
      <h2 className="mb-5 text-center">Achievements</h2>
      <div className="row justify-content-center g-4">
        {cardPosts.map((post) => (
          <div key={post.key} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <Card className="shadow-sm w-100 h-100">
              {post.backgroundImage && (
                <Card.Img
                  variant="top"
                  src={post.backgroundImage}
                  style={{
                    height: 120,
                    objectFit: "cover",
                    borderRadius: "0.5rem 0.5rem 0 0"
                  }}
                  alt={post.title}
                />
              )}
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="mb-2">{post.title}</Card.Title>
                  {post.subTitle && (
                    <Card.Subtitle className="mb-2 text-muted">{post.subTitle}</Card.Subtitle>
                  )}
                  <Card.Text className="mb-2">
                    <strong>Year:</strong> {post.year}
                  </Card.Text>
                  {post.description &&
                    post.description.map((desc, i) => (
                      <Card.Text key={i} className="mb-1">
                        {desc}
                      </Card.Text>
                    ))}
                </div>
                {post.viewMoreImageLink && (
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm mt-3 align-self-end"
                    onClick={() => handleShowModal(post.viewMoreImageLink)}
                  >
                    View More
                  </button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {/* Modal for viewing image */}
      {modalShow && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)"
          }}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Achievement Image</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={modalImg}
                  alt="Achievement"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "60vh",
                    borderRadius: 8
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
