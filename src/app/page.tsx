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

  const handleStartOpen = () => {
    // Start music on user click gesture
    if (musicRef.current) {
      musicRef.current.play();
    }
  };

  const handleEnvelopeOpened = () => {
    // Envelope animation finished — smoothly reveal main page
    setPageVisible(true);
  };

  return (
    <>
      {/* First screen: Opening Envelope Gate */}
      <Gate
        onStartOpen={handleStartOpen}
        onEnvelopeOpened={handleEnvelopeOpened}
      />

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
