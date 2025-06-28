"use client";

import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import "./achievements.css";
import cardPosts from "../../data/achievementData";

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
                    height: 250,
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
                    <strong>Date:</strong> {post.date}
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
