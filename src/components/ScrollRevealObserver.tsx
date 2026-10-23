"use client";

import { useEffect } from "react";

interface ScrollRevealObserverProps {
  pageVisible: boolean;
}

export default function ScrollRevealObserver({ pageVisible }: ScrollRevealObserverProps) {
  useEffect(() => {
    if (!pageVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pageVisible]);

  return null;
}
