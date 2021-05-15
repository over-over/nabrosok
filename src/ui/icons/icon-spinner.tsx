import React from 'react';

type Props = {
  size?: number;
  color?: string;
};

export const IconSpinner: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        shapeRendering: 'auto',
        width: '100px',
        height: '100px',
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={color ?? '#0a0a0a'}
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};
