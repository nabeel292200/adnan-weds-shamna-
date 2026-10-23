"use client";

import React, { useRef, useState } from "react";
import Butterfly from "./Butterfly";

export default function ReceptionTeaserSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showSignoff, setShowSignoff] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      setIsMuted(true);
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVideoEnded = () => {
    setShowSignoff(true);
  };

  return (
    <section id="teaser">
      <div className="inner">
        <div className="teaser-eyebrow reveal">A Celebration Awaits</div>
        <div className="teaser-date reveal">Saturday, 31 October 2026 &bull; 5:00 PM – 9:00 PM</div>
        <h2 className="teaser-title reveal">Reception</h2>
        <p className="teaser-place reveal">Taj Auditorium · Chemmad</p>
        <p className="teaser-whisper reveal">Something beautiful is waiting for you.</p>

        {/* Reveal Orb Button */}
        <button
          id="reveal-orb"
          className={`reveal-orb reveal ${isOpen ? "hidden-away" : ""}`}
          onClick={handleOpen}
          aria-label="Tap to reveal the reception film"
        >
          <span className="orb-ring" />
          <span className="orb-ring r2" />
          <span className="orb-core">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L19 12L6 20V4Z" fill="#A5713C" />
            </svg>
          </span>
          <span className="orb-bfly" id="bfly-orb">
            <Butterfly style={{ width: "22px" }} />
          </span>
        </button>
        <div className={`tap-label reveal ${isOpen ? "hidden-away" : ""}`} id="tap-label">
          Tap to Reveal
        </div>

        {/* Inline Reception Video Player */}
        <div className={`reception-media ${isOpen ? "show" : ""}`} id="reception-media">
          <video
            ref={videoRef}
            id="reception-video"
            src="/assets/video/reception-reveal.mp4"
            poster="/assets/video/reception-reveal-poster.jpg"
            playsInline
            preload="none"
            onEnded={handleVideoEnded}
          />
          <div className="rv-vignette" />
          <button
            id="rv-mute"
            className={`${isOpen ? "show" : ""} ${isMuted ? "is-muted" : ""}`}
            onClick={toggleMute}
            aria-label="Toggle sound"
          >
            <svg className="icon-on" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
              <path
                d="M16.5 8.5a5 5 0 010 7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M19 6a8.5 8.5 0 010 12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="icon-muted"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
              <path
                d="M16 9l5 6M21 9l-5 6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            id="rv-close"
            className={isOpen ? "show" : ""}
            onClick={handleClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Inline caption and signoff */}
        <div className={`rv-caption-inline ${isOpen ? "show" : ""}`} id="rv-caption-inline">
          <div className="rv-eyebrow">Reception</div>
          <div className="rv-title">Saturday, 31 October 2026 &bull; 5 PM – 9 PM</div>
          <div className="rv-place">Taj Auditorium, Chemmad</div>
          <div className={`rv-signoff ${showSignoff || isOpen ? "show" : ""}`} id="rv-signoff">
            Forever begins here — Adnan &amp; Shamna
          </div>
        </div>
      </div>
    </section>
  );
}
