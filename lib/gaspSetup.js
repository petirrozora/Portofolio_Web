"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function setupGSAP() {
  if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
  return gsap;
}
