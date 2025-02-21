import React from 'react';

const DigitalTwinModels: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      {/* Main Title */}
      <h1 style={{ marginBottom: '1.5rem', color: '#2a54c8' }}>
        Building Nepal’s First Digital Twin for Water Management: Paani AI’s Vision
      </h1>

      {/* Intro Image (Placeholder) */}
      <img
        src="/images/Digital_twin.png"
        alt="Digital Twin Visualization"
        style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '2rem' }}
      />

      {/* Intro Paragraph */}
      <p>
        Water management in Nepal is complex, influenced by seasonal variations, growing urban demand,
        and climate change. Yet, decision-making in the sector still relies on fragmented data and
        reactive approaches. At <strong>Paani AI</strong>, we are working to bridge this gap by
        developing Digital Twin models—virtual replicas of real-world water systems that integrate
        real-time data, AI, and predictive analytics.
      </p>

      {/* Subheading: Why Nepal Needs Digital Twin */}
      <h2 style={{ marginTop: '2.5rem' }}>Why Does Nepal Need Digital Twin Models for Water?</h2>
      <p>Nepal’s water sector faces several challenges:</p>
      <ul>
        <li>Lack of real-time monitoring for water supply and distribution networks.</li>
        <li>High levels of non-revenue water (NRW) due to leaks and inefficiencies.</li>
        <li>Limited flood prediction and early warning systems despite increasing climate risks.</li>
        <li>Inefficient groundwater management, leading to over-extraction and water stress.</li>
      </ul>
      <p>
        A Digital Twin can address these issues by providing a real-time, data-driven simulation of
        Nepal’s water systems, helping stakeholders anticipate, analyze, and optimize water resource
        management.
      </p>

      {/* Subheading: How Paani AI is Developing Digital Twins */}
      <h2 style={{ marginTop: '2.5rem' }}>How Paani AI is Developing Digital Twin Models</h2>
      <p>At Paani AI, we are designing Digital Twin models that will:</p>

      {/* 1) Integrate IoT... */}
      <h3 style={{ marginTop: '1.5rem', color: '#2a54c8' }}>Integrate IoT and Remote Sensing Data</h3>
      <ul>
        <li>Deploy smart sensors in water distribution networks, rivers, and reservoirs.</li>
        <li>Use satellite and drone data for large-scale monitoring of water bodies and groundwater levels.</li>
      </ul>

      {/* 2) Leverage AI... */}
      <h3 style={{ marginTop: '1.5rem', color: '#2a54c8' }}>Leverage AI and Machine Learning</h3>
      <ul>
        <li>Predict water demand and supply fluctuations.</li>
        <li>Detect leaks and inefficiencies in real-time.</li>
        <li>Provide flood forecasting and early warnings based on hydrological models.</li>
      </ul>

      {/* 3) Enable Real-Time... */}
      <h3 style={{ marginTop: '1.5rem', color: '#2a54c8' }}>Enable Real-Time Decision Support</h3>
      <ul>
        <li>Provide water utilities with interactive dashboards for system monitoring.</li>
        <li>Help policymakers simulate different scenarios (e.g., droughts, infrastructure expansion).</li>
        <li>Assist urban planners in designing climate-resilient water infrastructure.</li>
      </ul>
    </div>
  );
};

export default DigitalTwinModels;
