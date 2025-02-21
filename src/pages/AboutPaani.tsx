import React from 'react';

const AboutPaani: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Heading in blue */}
      <h1 style={{ color: 'blue' }}>About Paani AI</h1>

      <p>
        Paani AI is an innovator in Nepal’s water management sector.
        We leverage data-driven solutions and advanced analytics to ensure
        sustainable water resource management across the country.
      </p>

      <h2>Our Mission</h2>
      <ul>
        <li>Revolutionize water management with data and technology</li>
        <li>Address climate change challenges through the context of water</li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        Transform the way Nepal approaches water resource planning through
        data-informed decision making, ensuring a sustainable future for all.
      </p>

      {/* Clickable Image #1 */}
      <a
        href="https://kathmandupost.com/lalitpur/2019/08/17/kathmandu-valley-s-stone-spouts-were-once-gushing-with-water-now-they-re-slowly-disappearing"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', marginTop: '1rem' }}
      >
        <img
          src="/images/stone_spouts.jpg"
          alt="Nepal Water Resource"
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      </a>

      {/* Clickable Image #2 */}
      <a
        href="https://english.onlinekhabar.com/clean-water-and-sanitation-sdg6-nepal.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', marginTop: '1rem' }}
      >
        <img
          src="/images/tube_wells.jpg"
          alt="Nepal Water Resource"
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      </a>

      {/* Clickable Image #3 */}
      <a
        href="https://kathmandupost.com/columns/2023/01/23/nepal-s-inter-provincial-water-management"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', marginTop: '1rem' }}
      >
        <img
          src="/images/rivers.png"
          alt="Nepal Water Resource"
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      </a>
    </div>
  );
};

export default AboutPaani;


