"use client";

import React, { useRef, useState } from "react";

interface GateProps {
  onOpen: () => void;
}

export default function Gate({ onOpen }: GateProps) {
  const [btnHidden, setBtnHidden] = useState(false);
  const [posterHide, setPosterHide] = useState(false);
  const [gateFading, setGateFading] = useState(false);
  const [gateGone, setGateGone] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpen = () => {
    setBtnHidden(true);
    setPosterHide(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    onOpen();

    setTimeout(() => {
      setGateFading(true);
      document.body.classList.remove("locked");
      setTimeout(() => {
        setGateGone(true);
      }, 1300);
    }, 1800);
  };

  if (gateGone) return null;

  return (
    <div id="gate" className={`${gateFading ? "fading" : ""}`}>
      <img
        id="envelope-poster"
        className={`gate-poster ${posterHide ? "hide" : ""}`}
        src="/assets/video/envelope-opening-poster.jpg"
        alt="Wedding envelope"
      />
      <video
        ref={videoRef}
        id="envelope-video"
        src="/assets/video/envelope-opening.mp4"
        poster="/assets/video/envelope-opening-poster.jpg"
        muted
        playsInline
        preload="auto"
      />
      <div className="gate-veil" />
      <button
        id="open-btn"
        className={btnHidden ? "hidden" : ""}
        onClick={handleOpen}
        aria-label="Open invitation"
      >
        Open Invitation
      </button>
    </div>
  );
}
