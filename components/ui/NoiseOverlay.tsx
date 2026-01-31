import React from 'react';

const NoiseOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none w-full h-full opacity-[0.035] mix-blend-overlay">
      <svg className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default NoiseOverlay;