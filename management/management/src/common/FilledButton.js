import React from 'react';

function FilledButton({text,handler}) {
  return (
    <button
      className="btn"
      style={{
        // border: '1px solid #e74c3c', // Border color
        borderRadius: '20px',         // Rounded corners
        color: 'white',             // Text color
        padding: '5px 15px',
        backgroundColor: '#e74c3c' // Transparent background
      }}
      onClick={handler}
    >
      {text}
    </button>
  );
}

export default FilledButton;
