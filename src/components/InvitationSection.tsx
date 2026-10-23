import React from "react";

export default function InvitationSection() {
  return (
    <section id="invitation">
      <div className="bg-band top" />
      <div className="bg-band bottom" />
      <div className="inner">
        <p className="invite-lead reveal">
          Together with their families
          <br />
          cordially invite you to celebrate the wedding ceremony of
        </p>

        <h2 className="invite-name reveal">Mohammad Adnan</h2>
        <p className="invite-lead reveal" style={{ marginBottom: "4px" }}>
          Son of <b>Mr. Jahfarkoya</b>
        </p>
        <p className="invite-lineage reveal">
          Palokkil House
          <br />
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--ink-faint)" }}>
            PATHINARUNGAL, VADAKKE MAMPURAM
          </span>
        </p>

        <div className="divider reveal" />

        <div className="invite-caps reveal">And</div>
        <h2 className="invite-name reveal">Shamna</h2>
        <p className="invite-lead reveal" style={{ marginBottom: "4px" }}>
          Daughter of <b>Mr. Mohammed Ali</b>
        </p>
        <p className="invite-lineage reveal">
          Koormath (H)
          <br />
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--ink-faint)" }}>
            VENGARA, PATHMOOCHI
          </span>
        </p>
      </div>
    </section>
  );
}
