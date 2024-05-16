import { ScrollTarget } from "./types";

export function scrollToSection(target: ScrollTarget) {
    const elementTarget = document.getElementById(target.idToGo);
    if (elementTarget) {
      elementTarget.scrollIntoView({ behavior: 'smooth' });
    }
  }