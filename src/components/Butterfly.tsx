import React from "react";

interface ButterflyProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export default function Butterfly({ className = "", style, id }: ButterflyProps) {
  return (
    <div className={`butterfly ${className}`} style={style} id={id}>
      <svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
        <g className="wing-l">
          <path d="M18 15 C10 2, 0 4, 2 14 C3 21, 12 22, 18 16 Z" fill="#C4737C" opacity="0.9" />
          <path d="M18 15 C10 2, 0 4, 2 14 C3 21, 12 22, 18 16 Z" fill="none" stroke="#874F26" strokeWidth="0.4" opacity="0.5" />
        </g>
        <g className="wing-r">
          <path d="M22 15 C30 2, 40 4, 38 14 C37 21, 28 22, 22 16 Z" fill="#CE7548" opacity="0.9" />
          <path d="M22 15 C30 2, 40 4, 38 14 C37 21, 28 22, 22 16 Z" fill="none" stroke="#874F26" strokeWidth="0.4" opacity="0.5" />
        </g>
        <path d="M20 8 L20 22" stroke="#5B3B24" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    </div>
  );
}
