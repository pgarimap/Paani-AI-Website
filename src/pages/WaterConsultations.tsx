import React from 'react';

const WaterConsultations: React.FC = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', lineHeight: 1.6 }}>

      {/* Main Title: Large, Blue, Bold */}
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#2a54c8',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}
      >
        Water Consultation Services: Paani AI’s Approach
      </h1>

      {/* Optional Top Image */}
      <img
        src="/images/Consultations.png"
        alt="Water Consultation Visualization"
        style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '2rem' }}
      />

      {/* Intro Paragraph */}
      <p style={{ marginBottom: '1.5rem' }}>
        At <strong>Paani AI</strong>, we understand that every water system is unique,
        with its own challenges and opportunities. Whether it’s improving water
        distribution efficiency, implementing smart monitoring solutions, or
        developing Digital Twin models, our consultation services are designed
        to help utilities, municipalities, and organizations make
        <strong> data-driven decisions</strong> for better water management.
      </p>

      {/* Subheading */}
      <h2
        style={{
          fontSize: '1.75rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          marginTop: '2rem',
          lineHeight: 1.3,
        }}
      >
        Why Water Consultations Matter
      </h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Water resources in Nepal are abundant yet often underutilized due to outdated
        infrastructure, fragmented data, and policy gaps. Our consultation services aim
        to bridge these gaps, guiding stakeholders through modern, tech-driven approaches
        that enhance efficiency and sustainability.
      </p>

      {/* Another Subheading */}
      <h2
        style={{
          fontSize: '1.75rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          marginTop: '2rem',
          lineHeight: 1.3,
        }}
      >
        Our Three-Step Approach
      </h2>
      <p style={{ marginBottom: '0.75rem' }}>
        Each consultation project typically involves:
      </p>
      <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li>
          <strong>Assessment and Analysis:</strong> We evaluate your current water infrastructure,
          usage patterns, and pain points to identify key areas for improvement.
        </li>
        <li>
          <strong>Technical Roadmap:</strong> From sensor deployment to analytics platforms,
          we outline a step-by-step plan to integrate modern solutions—such as
          IoT monitoring or Digital Twin modeling—based on your objectives.
        </li>
        <li>
          <strong>Implementation and Support:</strong> Our team offers training, maintenance,
          and ongoing analysis to ensure that new systems remain robust, cost-effective,
          and adaptive to changing water demands.
        </li>
      </ul>

      {/* Conclusion or Wrap-Up */}
      <p>
        By combining our technical expertise with a deep understanding of local conditions,
        Paani AI helps organizations achieve greater efficiency, reduce water losses, and
        foster more equitable access to resources. From data collection to integration and
        beyond, we’re committed to delivering comprehensive, future-ready water management
        solutions that empower communities and utilities alike.
      </p>
    </div>
  );
};

export default WaterConsultations;

