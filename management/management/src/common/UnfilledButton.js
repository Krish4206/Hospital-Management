import React from 'react'

const UnfilledButton = ({text,handler}) => {
  return (
    <button
      className="btn"
      style={{
        border: '1px solid #e74c3c', // Border color
        borderRadius: '20px',         // Rounded corners
        color: '#e74c3c',             // Text color
        padding: '5px 15px',
        backgroundColor: 'transparent' // Transparent background
      }}
      onClick={handler}
    >
      {text}
    </button>
  )
}

export default UnfilledButton
