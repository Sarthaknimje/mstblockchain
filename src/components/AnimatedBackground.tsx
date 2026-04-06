import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const getAccentColor = () => {
      const style = getComputedStyle(document.documentElement);
      const primary = style.getPropertyValue("--primary").trim();
      if (!primary) return { h: 359, s: 79, l: 53 };
      const parts = primary.split(/\s+/);
      return {
        h: parseFloat(parts[0]) || 359,
        s: parseFloat(parts[1]) || 79,
        l: parseFloat(parts[2]) || 53,
      };
    };

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; hueOffset: number; alpha: number; pulse: number; pulseSpeed: number;
    }

    const particles: Particle[] = [];
    const count = Math.min(60, Math.floor((w * h) / 25000));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        hueOffset: Math.random() * 40 - 20,
        alpha: Math.random() * 0.3 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const maxDist = 150;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const accent = getAccentColor();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `hsla(${accent.h}, ${accent.s}%, ${accent.l}%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const pAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        const hue = accent.h + p.hueOffset;
        ctx.fillStyle = `hsla(${hue}, ${accent.s}%, ${accent.l + 10}%, ${pAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + 0.3 * Math.sin(p.pulse)), 0, Math.PI * 2);
        ctx.fill();

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        grd.addColorStop(0, `hsla(${hue}, ${accent.s}%, ${accent.l}%, ${pAlpha * 0.3})`);
        grd.addColorStop(1, `hsla(${hue}, ${accent.s}%, ${accent.l}%, 0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default AnimatedBackground;
