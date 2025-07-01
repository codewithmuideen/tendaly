import React from 'react';

// --- Styles defined as a JavaScript object ---
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#fff7ed', // A very light, warm background
    borderRadius: '12px',
    padding: '40px 30px',
    textAlign: 'center',
    maxWidth: '550px',
    margin: '40px auto', // Centers the component on the page
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  title: {
    fontSize: '2rem', // 32px
    color: '#2d3748', // A dark, professional gray
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.125rem', // 18px
    color: '#4a5568', // A softer gray
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  callToAction: {
    fontSize: '1.125rem', // 18px
    fontWeight: 'bold',
    color: '#c05621', // A deep orange, matching the heart
    marginBottom: '32px',
  },
  button: {
    backgroundColor: '#dd6b20', // A vibrant, friendly orange
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 28px',
    fontSize: '1rem', // 16px
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    textDecoration: 'none', // In case it's used as a link
  },
};

const MissionComponent = () => {
  // In a real application, you would use a router link instead of an alert.
  // Example for React Router: <Link to="/donate" style={styles.button}>Donate Now</Link>
  const handleDonateClick = () => {
    window.location.href = '/donate'; // Or '/csr'
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Support a Care Mission</h1>
      <p style={styles.subtitle}>
        Join Tendaly’s mission to make care accessible for everyone.
      </p>
      <p style={styles.callToAction}>
        🧡 Donate to fund care for families in need.
      </p>
      <button style={styles.button} onClick={handleDonateClick}>
        Donate Now
      </button>
    </div>
  );
};

export default MissionComponent;