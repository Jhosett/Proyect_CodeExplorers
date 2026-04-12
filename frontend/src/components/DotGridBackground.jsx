import React from 'react';

export default function DotGridBackground({ children, className = "" }) {
  return (
    <div className={`relative w-full min-h-screen bg-[#0F172A] overflow-hidden ${className}`}>
      
      {/* 
        Grid lines layer:
        Uses two perpendicular linear gradients to create a continuous grid pattern.
      */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* 
        Radial fade mask for a premium "spotlight" aesthetic.
        It fades the dots out toward the edges of the screen.
      */}
      <div className="absolute inset-0 pointer-events-none bg-[#0F172A] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_70%)]" />

      {/* Children content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      
    </div>
  );
}
