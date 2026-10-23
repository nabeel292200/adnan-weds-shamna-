"use client";

import React, { useRef, useState } from "react";
import Gate from "@/components/Gate";
import Hero from "@/components/Hero";
import InvitationSection from "@/components/InvitationSection";
import EventJourneySection from "@/components/EventJourneySection";
import ReceptionTeaserSection from "@/components/ReceptionTeaserSection";
import ClosingSection from "@/components/ClosingSection";
import MusicToggle, { MusicToggleHandle } from "@/components/MusicToggle";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

export default function WeddingPage() {
  const [pageVisible, setPageVisible] = useState(false);
  const musicRef = useRef<MusicToggleHandle>(null);

  const handleOpenInvitation = () => {
    // Start music playback
    if (musicRef.current) {
      musicRef.current.play();
    }

    // Reveal main page
    setTimeout(() => {
      setPageVisible(true);
    }, 1800);
  };

  return (
    <>
      {/* First screen: Opening Envelope Gate */}
      <Gate onOpen={handleOpenInvitation} />

      {/* Main Wedding Invitation Document */}
      <main id="page" className={pageVisible ? "visible" : ""}>
        <Hero />
        <InvitationSection />
        <EventJourneySection />
        <ReceptionTeaserSection />
        <ClosingSection />
      </main>

      {/* Floating Audio Controls */}
      <MusicToggle ref={musicRef} />

      {/* IntersectionObserver for Scroll Animations */}
      <ScrollRevealObserver pageVisible={pageVisible} />
    </>
  );
}
