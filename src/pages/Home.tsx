import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">Paani AI</div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Paani AI</h1>
        <h2>Empowering Nepal’s Water Sector with Data-Driven Innovation</h2>
        <Link to="/about">
          <button className="hero-button">About Paani</button>
        </Link>
        <img
          src="/images/Main_image_home.png"
          alt="Hero banner"
          className="hero-image"
          style={{ width: '100%', maxWidth: '1200px', borderRadius: '8px' }}
        />
      </header>

      {/* How Paani Transforms */}
      <section className="transform-section">
        <h2>How Paani Transforms</h2>
        <p>
          At <strong>Paani AI</strong>, we aim to ensure water is <strong>accessible, safe, and sustainably managed</strong>.
          We provide water utilities and the government with <strong>data-driven solutions</strong> for sustainable
          and resilient water management in Nepal.
        </p>
      </section>

      {/* PHASES Section */}
      <section className="phases-section">
        <h2 className="phase-main-title">Our Roadmap</h2>

        {/* PHASE 1: Single Row Flip Cards */}
        <div className="phase1-container">
          <h3>Phase 1: The Catalyst Stage</h3>

          {/* The single-row of flip cards */}
          <div className="flip-cards-row">
            {/* 1) Research & Development */}
            <FlipCard
              image="/images/Research.png"
              title="Research and Development"
              text={
                <>
                  At Paani AI, we believe in <strong>falling in love with the problem</strong>, not the solution. We
                  are trying to understand the issue through the lens of <strong>policy, governance, and public needs</strong>. We
                  will then actively work on designing research and finding solutions.
                </>
              }
            />

            {/* 2) Team Building */}
            <FlipCard
              image="/images/Teamwork.png"
              title="Team Building"
              text={
                <>
                  We are working to build a team of inquisitive water experts, engineers, and data scientists who
                  are eager to innovate in the Water &amp; AI sector.
                </>
              }
            />

            {/* 3) Incubation/Mentorship */}
            <FlipCard
              image="/images/mentorship.png"
              title="Mentorship and Incubation"
              text={
                <>
                  We are currently <strong>mentoring research enthusiasts</strong> to explore and develop ideas
                  in the field of Water and AI.
                </>
              }
            />

            {/* 4) Sectoral Collaborations */}
            <FlipCard
              image="/images/Collab.png"
              title="Sectoral Collaborations"
              text={
                <>
                  We have been consulting with government bodies under the <strong>Ministry of Water Supply</strong>,
                  NGOs, and private enterprises (Diyalo Techsnologies) to exchange knowledge and resources.
                </>
              }
            />
          </div>
        </div>

        {/* PHASE 2 Section with Services */}
        <div className="phase2">
          <h3>Phase 2: Shaping the Future</h3>
          <p>
            Building on Phase 1, we now provide advanced, data-driven services:
          </p>

          {/* Put the “Services” cards here */}
          <div className="services-row">
            <div className="service">
              <h3>
                <Link to="/predictive-modeling" className="service-title">
                  Predictive Modeling
                </Link>
              </h3>
              <p>Forecasting Water Needs for a Changing Climate</p>
              <img
                src="/images/Predictive_modeling.png"
                alt="Predictive modeling"
              />
            </div>

            <div className="service">
              <h3>
                <Link to="/digital-twin-models" className="service-title">
                  Digital Twin Models
                </Link>
              </h3>
              <p>Building a Virtual Blueprint for Smarter Water Management</p>
              <img
                src="/images/Digital_twin.png"
                alt="Digital twin"
              />
            </div>

            <div className="service">
              <h3>
                <Link to="/water-consultations" className="service-title">
                  Water Consultations
                </Link>
              </h3>
              <p>Expert Solutions for Integrated Water Resource Management in Nepal</p>
              <img
                src="/images/Consultations.png"
                alt="Water consultations"
              />
            </div>
          </div>
        </div>
      </section> {/* End .phases-section */}

      {/* Blogs Section */}
      <section className="blog-section">
        <h2 className="section-title">Blogs</h2>
        <div className="blogs-container">
          <div className="blog">
            <img
              src="/images/digitizing_water.png"
              alt="blog1"
              className="blog-image"
            />
            <h3>
              <Link to="/digitalizing-nepal-water" className="blog-link">
                Digitalizing the Water Sector: Nepal
              </Link>
            </h3>
            <p>Increasing water demand, aging infrastructure, and climate variability...</p>
          </div>
          <div className="blog">
            <img
              src="/images/scada.png"
              alt="blog2"
              className="blog-image"
            />
            <h3>
              <Link to="/blog2" className="blog-link">
                SCADA system and Water Sector: An overview
              </Link>
            </h3>
            <p>During a recent visit to the Project Implementation Directorate (PID)...</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src="/images/garima_formal.jpg" alt="Team member" />
          <div>
            <p><strong>Garima Acharya, </strong> CEO</p>
            <p>Civil Engineer</p>
          </div>
        </div>
        <div className="team-member">
          <img src="/images/pramish.jpeg" alt="Team member" />
          <div>
            <p><strong>Pramish Paudel, </strong> CTO</p>
            <p>Computer Scientist</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more about Paani AI?
          Email us at garima.acharya[at]gmail[dot]com, and we'll get back to you soon.
        </p>

        {/*<form className="contact-form">*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    className="contact-input"*/}
        {/*    placeholder="Name"*/}
        {/*  />*/}
        {/*  <input*/}
        {/*    type="email"*/}
        {/*    className="contact-input"*/}
        {/*    placeholder="Email"*/}
        {/*  />*/}
        {/*  <textarea*/}
        {/*    rows={4}*/}
        {/*    className="contact-textarea"*/}
        {/*    placeholder="Message"*/}
        {/*  />*/}
        {/*  <button*/}
        {/*    type="submit"*/}
        {/*    className="contact-submit"*/}
        {/*  >*/}
        {/*    Submit*/}
        {/*  </button>*/}
        {/*</form>*/}
      </section>
    </div>
  );
}

/**
 * Reusable FlipCard component
 * - 'image': front image
 * - 'title': bold text on flip side
 * - 'text': paragraph (JSX) on the flip side
 */
// Define TypeScript interface for FlipCard props
interface FlipCardProps {
  image: string;
  title: string;
  text: JSX.Element | string; // Accepts JSX or plain string
}

function FlipCard({ image, title, text }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
      <div
          className={`flip-card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleClick}
      >
        <div className="flip-card-inner">
          {/* FRONT */}
          <div className="flip-card-front">
            <img src={image} alt={title} />
          </div>
          {/* BACK */}
          <div className="flip-card-back">
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        </div>
      </div>
  );
}

export default Home;
