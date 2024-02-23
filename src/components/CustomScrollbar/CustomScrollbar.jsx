import React from 'react'
import './CustomScrollbar.css';
const CustomScrollbar = ({ children }) => {
    return (
      <div className="custom-scrollbar">
        {/* Content that will be scrolled */}
        <div className="scroll-content">
          {children}
        </div>
      </div>
    );
  }

export default CustomScrollbar
