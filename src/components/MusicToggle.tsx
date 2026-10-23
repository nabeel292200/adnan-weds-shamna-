"use client";

import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

export interface MusicToggleHandle {
  play: () => void;
  pause: () => void;
}

const MusicToggle = forwardRef<MusicToggleHandle>((_, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    },
    pause: () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    },
  }));

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <button
        id="music-toggle"
        className={isPlaying ? "" : "muted"}
        onClick={toggleMusic}
        aria-label="Toggle music"
        aria-pressed={isPlaying}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="bar" x="4" y="10" width="3" height="10" rx="1" fill="currentColor" />
          <rect className="bar" x="10.5" y="6" width="3" height="14" rx="1" fill="currentColor" />
          <rect className="bar" x="17" y="12" width="3" height="8" rx="1" fill="currentColor" />
        </svg>
      </button>
      <audio ref={audioRef} id="bg-music" loop preload="none" src="/assets/audio/nikkah-song.mp3" />
    </>
  );
});

MusicToggle.displayName = "MusicToggle";

export default MusicToggle;
