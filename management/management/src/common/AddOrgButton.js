import React from 'react'

const AddOrgButton = () => {
  return (
    <button
        className="btn"
        style={{
        backgroundColor: '#e74c3c', // Adjusted color
        color: '#fff',
        borderRadius: '20px',
        padding: '5px 15px'
        }}
    >
        + Add Org
    </button>
  )
}

export default AddOrgButton
