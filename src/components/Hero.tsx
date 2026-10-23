import React from "react";
import Butterfly from "./Butterfly";

export default function Hero() {
  return (
    <section id="hero">
      <div className="inner">
        <div className="bismillah reveal">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
        <div className="monogram reveal">A &nbsp;|&nbsp; S</div>
        <h1 className="hero-names reveal">
          ADNAN
          <span className="hero-amp">&amp;</span>
          SHAMNA
        </h1>
        <div className="hero-tagline reveal">Forever begins here</div>
        <div className="hero-date reveal">30 &bull; 31 . 10 . 2026</div>
      </div>
      <div className="scroll-cue reveal">
        <span>↓</span>SCROLL TO DISCOVER
      </div>
      <Butterfly
        className="bfly-drift"
        style={{ top: "16%", right: "12%", width: "34px" }}
        id="bfly-hero"
      />
    </section>
  );
}
