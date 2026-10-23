import React from "react";

export default function EventJourneySection() {
  return (
    <section id="journey">
      <div className="bg-band top" />
      <div className="bg-band bottom" />
      <div className="inner">
        <div className="journey-eyebrow reveal">Event Journey</div>
        <div className="divider reveal" />
        <div className="jline">
          {/* Stop 01 — Nikkah */}
          <div className="jstop reveal">
            <div className="jstop-card">
              <span className="jnum">01</span>
              <div className="jdate">Friday, 30 October 2026 &bull; 9:00 AM</div>
              <div className="jevent">Nikkah Ceremony</div>
              <div className="jplace">
                Town Juma Masjid
                <br />
                Vadakke Mampuram
              </div>
              <div
                className="jqr-box"
                style={{
                  margin: "14px auto 10px",
                  width: "94px",
                  height: "94px",
                  background: "#fff",
                  padding: "5px",
                  border: "1px solid var(--copper-line)",
                  borderRadius: "4px",
                  boxShadow: "0 3px 8px rgba(91,59,36,0.06)",
                }}
              >
                <img
                  src="/assets/images/nikkah-masjid-qr.svg"
                  alt="Scan Nikkah Location"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
              <a
                className="btn jbtn"
                href="https://www.google.com/maps/place/Uvm+house/@11.0435992,75.883659,20.33z/data=!4m12!1m5!3m4!2zMTHCsDAyJzM3LjIiTiA3NcKwNTMnMDIuNCJF!8m2!3d11.0436764!4d75.8839951!3m5!1s0x3ba653002252aaad:0xd0d4e172b3cc641e!8m2!3d11.0436072!4d75.8840149!16s%2Fg%2F11yzztng4v?hl=en&entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="jpin"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21s7-7.58 7-12a7 7 0 10-14 0c0 4.42 7 12 7 12z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          <div className="jconnector reveal" />

          {/* Stop 02 — Reception */}
          <div className="jstop reveal">
            <div className="jstop-card">
              <span className="jnum">02</span>
              <div className="jdate">Saturday, 31 October 2026 &bull; 5 PM - 9 PM</div>
              <div className="jevent">Reception</div>
              <div className="jplace">
                Taj Auditorium
                <br />
                Chemmad
              </div>
              <div
                className="jqr-box"
                style={{
                  margin: "14px auto 10px",
                  width: "94px",
                  height: "94px",
                  background: "#fff",
                  padding: "5px",
                  border: "1px solid var(--copper-line)",
                  borderRadius: "4px",
                  boxShadow: "0 3px 8px rgba(91,59,36,0.06)",
                }}
              >
                <img
                  src="/assets/images/taj-auditorium-qr.svg"
                  alt="Scan Reception Location"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
              <a
                className="btn jbtn"
                href="https://www.google.com/maps/search/?api=1&query=Taj+Auditorium+Chemmad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="jpin"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21s7-7.58 7-12a7 7 0 10-14 0c0 4.42 7 12 7 12z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
