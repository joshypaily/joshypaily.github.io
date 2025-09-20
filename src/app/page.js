"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

const recommendations = [
	{
		name: "Pranati Mahato",
		headline: "Sr. Engineering Manager at Expedia Group",
		caption: "July 13, 2025, Pranati worked with Joshy on the same team",
		text: "I’ve had the pleasure of working with Joshy Paily for a quarter in my very first project in Expedia Group. As I was new he not only helped me to onboard but also helped his teammates during the design & development which helped in smooth delivery of the project. Whether tackling complex backend logic or helping teammates debug tricky issues, Joshy Paily always brings clarity, calm, and serious technical skill to the table.\n\nThey write clean, reliable code, think ahead, and are great at balancing speed with quality. Beyond that, they’re just a solid teammate — always helpful, collaborative, and easy to work with.",
	},
	{
		name: "Sharon K A",
		headline: "Senior Developer at UST Global",
		caption: "May 8, 2023, Sharon worked with Joshy on the same team",
		text: "Joshy and I worked together on several projects, and I was lucky to call him my team mate. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time. He had excellent skill in Java and had a knack for keeping everyone calm and productive during intense crunch periods. Any team would be lucky to have Joshy, and I couldn’t recommend him more for any business looking for new talent.",
	},
	{
		name: "Jefin Steephan",
		headline: "Solution Architect | AWS | Asure",
		caption: "February 15, 2023, Jefin worked with Joshy on the same team",
		text: "He is very good at learning new technologies. Strong knowledge in Java made him great at problem solving. Self motivated and independent engineer. He give his best to his assigned work and supporting co-workers. Highly recommended.",
	},
	{
		name: "Vinod Vijayan",
		headline: "Prduct lead at Pinmicro",
		caption: "January 14 2023, Vinod managed Joshy directly",
		text: "Joshy is very hardworking, a great team player, a good leader, and a technology enthusiast. Moreover, he is a great friend.",
	},
	{
		name: "Krishnakumar M",
		headline: "Software Engineer at BEO software",
		caption: "July 8, 2022, Krishnakumar worked with Joshy on the same team",
		text: "I had the pleasure of working with Joshy. He is a deep learner. He learns and adapts to different project environments in an easy way. He follows a great work ethic. His strong technical skills and accountability make him a great asset to any organization.",
	},
	{
		name: "Albin Jose",
		headline: "Senior Product Engineer at IBS Software",
		caption: "July 8, 2022, Joshy was senior to Albin but didn't manage Albin directly.",
		text: "Joshy is very hardworking and tech enthusiastic person. He is fast learner who finds best solutions for the problems always. He is a good mentor also.",
	},
	{
		name: "Nayana Cletus",
		headline: "Consultant at Deloitte",
		caption: "July 7, 2022, Nayana worked with Joshy on the same team",
		text: "Joshy is a hardworking and dedicated person and and excellent programmer. He is a professional and helpful person who can guide a team very well.",
	},
	{
		name: "Midhun Kc",
		headline: "Senior Software Engineer at HCL Technologies",
		caption: "July 7, 2022, Midhun worked with Joshy on the same team",
		text: '"Ability to learn quickly" & "hard working", which makes him different from others!',
	},
	{
		name: "Digna James",
		headline: "Java Developer at IBM India Software Labs",
		caption: "July 24, 2021, DIGNA worked with Joshy on the same team",
		text: "Hard work, efficient , fast learning",
	},
	{
		name: "Saranya G",
		headline:
			"Strategic Performance Marketer | Data Analytics | Conversion Optimization | Fueling Business Growth",
		caption: "April 25, 2021, Saranya worked with Joshy on the same team",
		text: "I had the pleasure of working with Joshy for two years at Indocosmo Systems. Joshy's ability to juggle multiple projects was unlike any I’ve seen before and made a dramatic difference in the productivity level of our team. Any organization would be lucky to have Joshy as an employee.",
	},
];

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const [carouselIndex, setCarouselIndex] = useState(0);

	useEffect(() => {
		// Check for saved theme in localStorage
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setDarkMode(savedTheme === "dark");
			document.body.className = savedTheme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
		}
	}, []);

	const totalPages = Math.ceil(recommendations.length / 3);
	const handleCarouselSelect = (selectedIndex) => setCarouselIndex(selectedIndex);

	return (
		<Container
			as="main"
			className={`my-5 custom-theme${darkMode ? " dark-mode" : ""}`}
			style={{
				// background: `url('/bg-main.avif') center/cover no-repeat fixed`,
				borderRadius: "18px",
				boxShadow: "0 4px 32px 0 rgba(0,0,0,0.07)",
				padding: "2rem",
			}}
		>
      <Col style={{ position: "relative" }}>
        <Card className="mb-5 shadow-sm">
          <Row className="align-items-center justify-content-center g-0">
            <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
              <img
                src="/joshy.jpeg"
                alt="Joshy Paily"
                className="rounded-circle shadow"
                style={{
                  width: 180,
                  height: 180,
                  objectFit: "cover",
                  border: "4px solid #fff",
                }}
              />
            </Col>
            <Col xs={12} md={8} style={{ position: "relative" }}>
              <Card.Body>
                <Card.Title as="h1" className="mb-3" style={{ fontWeight: 700, fontSize: "2.2rem" }}>
                  Joshy Paily
                </Card.Title>
                <Card.Text style={{ fontSize: "1.1rem", color: "#333" }}>
                  A software engineer with 6+ years of experience, showcasing a proven track record in
                  the information technology and services sector. Proficient in Java, Kotlin, Spring
                  Boot and microservices with a knack for crafting applications from front-end to
                  back-end. Possesses extensive expertise across all development layers, including UI,
                  database, system design, analysis, and implementation, adhering to clean code
                  principles.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
		
			{/* Highlights Section */}
			<Row className="mt-5">
				{/* Skills Highlight */}
				<Col xs={12} md={6} lg={3} className="mb-4">
					<Card className="h-100 shadow-sm">
						<Card.Body>
							<Card.Title>Top Skills</Card.Title>
							<Card.Text>Java, Kotlin, Spring Boot, Microservices, AWS, Docker</Card.Text>
							<a href="/skills" className="btn btn-outline-primary btn-sm mt-2">
								View Skills
							</a>
						</Card.Body>
					</Card>
				</Col>
				{/* Experience Highlight */}
				<Col xs={12} md={6} lg={3} className="mb-4">
					<Card className="h-100 shadow-sm">
						<Card.Body>
							<Card.Title>Recent Experience</Card.Title>
							<Card.Text>Lead Software Engineer at IBS Software</Card.Text>
							<a href="/experience" className="btn btn-outline-primary btn-sm mt-2">
								View Experience
							</a>
						</Card.Body>
					</Card>
				</Col>
				{/* Achievements Highlight */}
				<Col xs={12} md={6} lg={3} className="mb-4">
					<Card className="h-100 shadow-sm">
						<Card.Body>
							<Card.Title>Achievements</Card.Title>
							<Card.Text>Hacktrix-2017, Web Design Competitions (1st Prize)</Card.Text>
							<a href="/achievements" className="btn btn-outline-primary btn-sm mt-2">
								View Achievements
							</a>
						</Card.Body>
					</Card>
				</Col>
				{/* Projects Highlight */}
				<Col xs={12} md={6} lg={3} className="mb-4">
					<Card className="h-100 shadow-sm">
						<Card.Body>
							<Card.Title>Featured Project</Card.Title>
							<Card.Text>A pub-sub model application using Apache ActiveMQ broker</Card.Text>
							<a href="/projects" className="btn btn-outline-primary btn-sm mt-2">
								View Projects
							</a>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* Recommendations Section as a slider */}
			<Row className="mt-5">
				<Col xs={12}>
					<a
						href="https://www.linkedin.com/in/joshypaily/details/recommendations/?detailScreenTabIndex=0"
						target="_blank"
						rel="noopener noreferrer"
						className="mb-4 h3 d-inline-block text-decoration-underline"
						style={{ cursor: "pointer" }}
						id="recommendations-link"
					>
						LinkedIn Recommendations
					</a>
					<div className="position-relative">
						<Carousel
							indicators={true}
							interval={7000}
							pause="hover"
							nextLabel="Next"
							prevLabel="Previous"
							className="pb-5 carousel-controls-outside"
							controls={false} // Hide default controls
							activeIndex={carouselIndex}
							onSelect={handleCarouselSelect}
						>
							{Array.from({ length: Math.ceil(recommendations.length / 3) }).map((_, pageIdx) => (
							<Carousel.Item key={pageIdx}>
								<div className="d-flex flex-column gap-3">
									{recommendations.slice(pageIdx * 3, pageIdx * 3 + 3).map((rec, idx) => (
										<Card key={rec.name + idx} className="w-100 shadow-sm recommendation-row-card">
											<Card.Body>
												<Row className="g-0 align-items-start">
													<Col xs={12} md={2} className="text-center pe-3">
														<div className="avatar-placeholder rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center" style={{ width: 64, height: 64, fontWeight: 700 }}>
															{(rec.name || 'JP').split(' ').map(n => n ? n[0] : '').slice(0,2).join('')}
														</div>
													</Col>
													<Col xs={12} md={10} className="pt-1 pt-md-0 d-flex flex-column">
														<div className="meta">
															<Card.Subtitle className="mb-1 text-info" style={{ fontWeight: 600 }}>{rec.name}</Card.Subtitle>
															<Card.Text className="mb-0" style={{ fontSize: '0.95rem' }}>{rec.headline}</Card.Text>
															<Card.Text className="mb-0" style={{ fontSize: '0.85rem', color: '#888' }}>{rec.caption}</Card.Text>
														</div>
														<div className="description mt-3">
															<Card.Text
																className="recommendation-quote"
																style={{ fontStyle: 'italic', whiteSpace: 'pre-wrap', cursor: rec.text && rec.text.length > 220 ? 'help' : 'auto' }}
																title={rec.text && rec.text.length > 220 ? rec.text : undefined}
																aria-label={rec.text && rec.text.length > 220 ? rec.text : undefined}
															>
																{rec.text}
															</Card.Text>
														</div>
													</Col>
												</Row>
											</Card.Body>
										</Card>
									))}
								</div>
							</Carousel.Item>
						))}
						</Carousel>
						{/* Custom Controls outside the cards */}
						<button
							className="carousel-control-prev custom-carousel-btn"
							style={{
								left: -40,
								top: "50%",
								transform: "translateY(-50%)",
								zIndex: 20,
								position: "absolute",
							}}
							onClick={() => handleCarouselSelect((carouselIndex - 1 + totalPages) % totalPages)}
							aria-label="Previous"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
						</button>
						<button
							className="carousel-control-next custom-carousel-btn"
							style={{
								right: -40,
								top: "50%",
								transform: "translateY(-50%)",
								zIndex: 20,
								position: "absolute",
							}}
							onClick={() => handleCarouselSelect((carouselIndex + 1) % totalPages)}
							aria-label="Next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
						</button>
					</div>
				</Col>
			</Row>
			<style>{`
        .carousel-controls-outside .custom-carousel-btn {
          background: none;
          border: none;
          outline: none;
          padding: 0;
        }
        .carousel-controls-outside .carousel-control-prev-icon,
        .carousel-controls-outside .carousel-control-next-icon {
          background-color: #007bff;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          opacity: 1 !important;
        }
        /* Add background for carousel indicators */
        .carousel-controls-outside .carousel-indicators [data-bs-target] {
          background-color: #fff;
          border: 2px solid #007bff;
          opacity: 1;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }
        .carousel-controls-outside .carousel-indicators .active {
          background-color: #007bff;
          border-color: #0056b3;
        }
        .carousel-controls-outside .carousel-indicators {
          padding: 0.5rem 1rem;
          border-radius: 1.5rem;
          background: rgba(0, 0, 0, 0.15);
          bottom: -30px;
        }
       /* Row style for recommendation cards */
       .recommendation-row-card { border-radius: 10px; padding: 0; }
       .recommendation-row-card .card-body { padding: 1rem; display:flex; flex-direction:column; }
       .recommendation-row-card .meta { /* top area */ }
       .recommendation-row-card .description { margin-top: 0; }
       .recommendation-row-card .recommendation-quote { display:block; overflow: visible; white-space: normal; }
       .avatar-placeholder { font-size: 1.1rem; }
        /* Recommendation fixed-height / clamp to avoid jerking */
        .recommendation-card { border-radius: 10px; overflow: hidden; }
        .recommendation-card .card-body { display: flex; flex-direction: column; }
        .recommendation-quote { flex: 1 1 auto; display:block; overflow: visible; white-space: normal; }
        @media (max-width: 576px) {
          .recommendation-card .card-body { }
          .recommendation-quote { }
          .carousel-controls-outside .carousel-indicators { bottom: -36px; }
        }
      `}</style>
		</Container>
	);
}
