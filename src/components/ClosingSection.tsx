import React from "react";
import Butterfly from "./Butterfly";

export default function ClosingSection() {
  return (
    <section id="closing">
      <div className="inner">
        <Butterfly
          style={{ position: "relative", margin: "0 auto 28px", width: "32px" }}
          id="bfly-closing"
        />
        <div className="closing-names reveal">Adnan &amp; Shamna</div>
        <div className="closing-date reveal">30 &bull; 31 . 10 . 2026</div>
        <div className="closing-tag reveal">Forever begins here</div>
        <div
          className="crafted-by reveal"
          style={{
            marginTop: "48px",
            fontSize: "11px",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span>Crafted by</span>
          <span style={{ fontWeight: 700, color: "var(--copper-deep)", letterSpacing: "0.28em" }}>
            Zetron
          </span>
        </div>
      </div>
    </section>
  );
}
