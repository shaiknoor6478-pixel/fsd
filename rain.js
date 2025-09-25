import React, { useState } from 'react';

export default function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(to bottom, #1e3c72 0%, #2a5298 100%)',
        padding: '20px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>Rainy Day Toggle</h1>
        <button
          onClick={() => setShow(!show)}
          style={{
            padding: '12px 24px',
            background: 'rgba(255, 255, 255, 0.15)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            cursor: 'pointer',
            backdropFilter: 'blur(5px)',
            fontSize: '16px',
          }}
        >
          {show ? 'stop rain' : 'start rain'}
        </button>
        {show && (
          <div style={{ marginTop: '30px' }}>
            <div style={{ fontSize: '40px' }}>🌧️</div>
            <p style={{ marginTop: '10px' }}>the rain is falling peacefully..</p>
          </div>
        )}
      </div>
    </div>
  );
}