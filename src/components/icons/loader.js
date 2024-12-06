import React from 'react';
import './IconLoader.css'; // Add custom styles for animations

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 96" width="84" height="96">
    <title>Loader Logo</title>
    <g>
      <polygon
        className="loader-polygon"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="40 2 82 22 82 74 40 94 2 74 2 22"
        fill="none"
      />
      <text
        x="42"
        y="54"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontFamily="Arial, sans-serif"
        fontSize="50"
        fill="currentColor">
        A
      </text>
    </g>
  </svg>
);

export default IconLoader;
