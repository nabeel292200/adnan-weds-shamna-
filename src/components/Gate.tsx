"use client";

import React, { useRef, useState, useEffect } from "react";

interface GateProps {
  onStartOpen?: () => void;
  onEnvelopeOpened: () => void;
}

export default function Gate({ onStartOpen, onEnvelopeOpened }: GateProps) {
  const [btnHidden, setBtnHidden] = useState(false);
  const [posterHide, setPosterHide] = useState(false);
  const [gateFading, setGateFading] = useState(false);
  const [gateGone, setGateGone] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTriggeredRef = useRef(false);
  const isOpeningRef = useRef(false);

  const finishOpening = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // Trigger fading dissolve on gate
    setGateFading(true);
    // Reveal main page underneath
    onEnvelopeOpened();
    // Allow page scrolling
    document.body.classList.remove("locked");

    // Remove gate from DOM after fade transition completes (1350ms)
    setTimeout(() => {
      setGateGone(true);
    }, 1350);
  };

  const handleOpenClick = () => {
    // Prevent multiple clicks from triggering overlapping animations
    if (isOpeningRef.current) return;
    isOpeningRef.current = true;

    setBtnHidden(true);

    // Call start callback (e.g. to start background music playback on user gesture)
    if (onStartOpen) {
      onStartOpen();
    }

    // Respect reduced-motion accessibility preferences
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      finishOpening();
      return;
    }

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
          })
          .catch(() => {
            // If browser blocks video playback, transition gracefully
            finishOpening();
          });
      }

      // Safety fallback: if video ended event does not fire within 3.5s
      setTimeout(() => {
        if (!hasTriggeredRef.current) {
          finishOpening();
        }
      }, 3500);
    } else {
      finishOpening();
    }
  };

  const handleVideoPlaying = () => {
    setPosterHide(true);
  };

  const handleVideoPause = () => {
    if (!hasTriggeredRef.current) {
      setPosterHide(false);
    }
  };

  const handleVideoEnded = () => {
    // Envelope opening animation is complete; now transition to the hero page
    finishOpening();
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("locked");
    };
  }, []);

  if (gateGone) return null;

  return (
    <div id="gate" className={gateFading ? "fading" : ""}>
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
        onPlaying={handleVideoPlaying}
        onPause={handleVideoPause}
        onEnded={handleVideoEnded}
      />
      <div className="gate-veil" />
      <button
        id="open-btn"
        className={btnHidden ? "hidden" : ""}
        onClick={handleOpenClick}
        aria-label="Open invitation"
      >
        Open Invitation
      </button>
    </div>
  );
}
