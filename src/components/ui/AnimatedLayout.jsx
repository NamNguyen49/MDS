import React, { useEffect, useRef } from "react";

/**
 * AnimatedLayout – bao bọc toàn bộ app để:
 * 1. Cursor spotlight (ánh sáng theo chuột trên nền)
 * 2. Particle constellation (các hạt nổi lên trên nền)
 * 3. Scroll-reveal cho các phần tử có class `.reveal`
 */
const AnimatedLayout = ({ children }) => {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  /* ------------------------------------------------------------------
   * 1. CURSOR SPOTLIGHT
   * ------------------------------------------------------------------ */
  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      spotlight.style.left = e.clientX + "px";
      spotlight.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ------------------------------------------------------------------
   * 2. FLOATING PARTICLE CONSTELLATION (Canvas)
   * ------------------------------------------------------------------ */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 55;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const getThemeColor = () => {
      const dark =
        document.documentElement.getAttribute("data-theme") === "dark";
      return dark ? "180,180,255" : "100,120,200";
    };

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const col = getThemeColor();

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${p.opacity})`;
        ctx.fill();
      });

      // Lines between nearby particles
      const LINK_DIST = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${col},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ------------------------------------------------------------------
   * 3. SCROLL-REVEAL  (IntersectionObserver)
   * ------------------------------------------------------------------ */
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".overview-card, .example-card, .doc-section, .stat-card, .overview-banner",
    );

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => {
      el.classList.add("will-reveal");
      obs.observe(el);
    });

    return () => obs.disconnect();
  });

  return (
    <>
      {/* Particle canvas – fixed behind everything */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.65,
        }}
      />

      {/* Cursor glow spotlight */}
      <div
        ref={spotlightRef}
        className="cursor-spotlight"
        style={{ zIndex: 0 }}
      />

      {/* App content sits above canvas */}
      <div style={{ position: "relative", zIndex: 1, display: "contents" }}>
        {children}
      </div>
    </>
  );
};

export default AnimatedLayout;
