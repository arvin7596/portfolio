import { useState, useEffect } from "react";

export const useIntersectionObserver = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0, 0.2, 0.5, 0.8, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      let bestSection = "";
      let bestScore = -1;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName =
            entry.target.getAttribute("name") || entry.target.id;
          if (sectionIds.includes(sectionName)) {
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;

            // Calculate visibility score
            const visibleHeight =
              Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const visibility =
              Math.max(0, visibleHeight) /
              Math.min(rect.height, viewportHeight);

            // Calculate center position score
            const centerDistance = Math.abs(
              rect.top + rect.height / 2 - viewportHeight / 2
            );
            const centerScore = Math.max(
              0,
              1 - centerDistance / viewportHeight
            );

            // Combined score
            const score = visibility * 0.8 + centerScore * 0.2;

            if (score > bestScore) {
              bestScore = score;
              bestSection = sectionName;
            }
          }
        }
      });

      // Only update if we found a valid section with a good score
      if (bestSection && bestScore > 0.3 && bestSection !== activeSection) {
        setActiveSection(bestSection);
      }
    }, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element =
        document.querySelector(`[name="${id}"]`) || document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, activeSection]);

  return activeSection;
};
