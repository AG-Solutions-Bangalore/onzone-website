import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const WelcomeScreen = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return sessionStorage.getItem("onzone_welcome_shown") === "true";
      } catch (e) {
        return false;
      }
    }
    return false;
  });

  // Core containers
  const screenRef = useRef(null);
  const stageRef = useRef(null);
  const zContainerRef = useRef(null);
  const groundShadowRef = useRef(null);

  // 4 Structural Cutting Pieces (Screenshot 1430) + Red Core + Unified Layer
  const topBarRef = useRef(null);        // Top horizontal arm & hook
  const upperStemRef = useRef(null);     // Upper-right diagonal stem
  const lowerStemRef = useRef(null);     // Lower-left diagonal stem
  const bottomBarRef = useRef(null);     // Bottom horizontal arm & hook
  const redCorePieceRef = useRef(null);  // Center red slice
  const unifiedZRef = useRef(null);      // Seamless assembled Z
  const gleamSeamRef = useRef(null);     // Seam gleam flash

  // Outer glowing ring, shockwave & core flash (for rotation and blast)
  const outerRingContainerRef = useRef(null);
  const outerRingRef = useRef(null);
  const orbitHaloRef = useRef(null);
  const shockwaveCircleRef = useRef(null);
  const coreFlashRef = useRef(null);
  const redCoreGlowRef = useRef(null);
  const silkWavesRef = useRef(null);
  const particleCanvasRef = useRef(null);

  // Brand texts & sparkles
  const textContainerRef = useRef(null);
  const brandNameRef = useRef(null);
  const brandReflectionRef = useRef(null);
  const taglineRef = useRef(null);
  const sparkleLeftRef = useRef(null);
  const sparkleRightRef = useRef(null);
  const skipBtnRef = useRef(null);

  // Trigger high-velocity radial particle burst on blast
  const triggerParticleBurst = useCallback(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);
    const centerX = width / 2;
    const centerY = height / 2 - 32;

    const particles = [];
    const count = 110;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3.5 + Math.random() * 8.5;
      const size = 1.6 + Math.random() * 3.6;
      const randType = Math.random();

      let color;
      if (randType > 0.55) {
        // Luxury Crimson Spark
        color = `rgba(209, 30, 38, ${0.8 + Math.random() * 0.2})`;
      } else if (randType > 0.25) {
        // Gold Shimmer
        color = `rgba(198, 150, 63, ${0.85 + Math.random() * 0.15})`;
      } else if (randType > 0.08) {
        // Pure White Flash Spark
        color = `rgba(255, 255, 255, 0.95)`;
      } else {
        // Deep Navy Spark
        color = `rgba(14, 26, 48, 0.6)`;
      }

      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed * 0.82,
        size,
        alpha: 1,
        color,
        friction: 0.935 + Math.random() * 0.035,
      });
    }

    let animId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let aliveCount = 0;
      particles.forEach((p) => {
        if (p.alpha <= 0.01) return;
        aliveCount++;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.alpha *= 0.96;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      if (aliveCount > 0) {
        animId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    if (isFinished) return;

    try {
      sessionStorage.setItem("onzone_welcome_shown", "true");
    } catch (e) {
      // storage quota or incognito restriction fallback
    }

    // Prevent document scrolling during cinematic intro
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        onComplete: () => {
          // Smooth curtain reveal sliding up to show homepage
          gsap.to(screenRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => {
              try {
                sessionStorage.setItem("onzone_welcome_shown", "true");
              } catch (e) {}
              document.body.style.overflow = "";
              setIsFinished(true);
              if (onComplete) onComplete();
            },
          });
        },
      });

      // ── Initial State Setup ──
      // 3D stage perspective
      gsap.set(stageRef.current, { perspective: 1200 });

      // Z container initial 3D pose
      gsap.set(zContainerRef.current, {
        rotateY: -18,
        rotateX: 10,
        scale: 0.96,
        transformStyle: "preserve-3d",
      });

      // Split 4 pieces floating apart in 3D (matching Screenshot 1430)
      gsap.set(topBarRef.current, {
        x: -48,
        y: -75,
        z: 35,
        rotateZ: -12,
        rotateX: 20,
        rotateY: -8,
        opacity: 0,
        scale: 0.94,
      });
      gsap.set(upperStemRef.current, {
        x: 55,
        y: -42,
        z: 25,
        rotateZ: 10,
        rotateX: -15,
        rotateY: 18,
        opacity: 0,
        scale: 0.94,
      });
      gsap.set(lowerStemRef.current, {
        x: -56,
        y: 35,
        z: 20,
        rotateZ: 8,
        rotateX: 15,
        rotateY: -18,
        opacity: 0,
        scale: 0.94,
      });
      gsap.set(bottomBarRef.current, {
        x: 52,
        y: 72,
        z: 30,
        rotateZ: -8,
        rotateX: -20,
        rotateY: 10,
        opacity: 0,
        scale: 0.94,
      });
      gsap.set(redCorePieceRef.current, {
        scale: 0.5,
        opacity: 0,
        z: -20,
      });

      // Unified assembled Z layer starts hidden until pieces lock
      gsap.set(unifiedZRef.current, { opacity: 0 });

      // Ground shadow
      gsap.set(groundShadowRef.current, { scaleX: 0.35, opacity: 0 });

      // Seam Gleam
      gsap.set(gleamSeamRef.current, { scaleX: 0, opacity: 0 });

      // Outer rings & blast effects
      gsap.set(outerRingContainerRef.current, { opacity: 0, scale: 0.6 });
      gsap.set(outerRingRef.current, { scale: 0.7, opacity: 0, rotateZ: -25 });
      gsap.set(orbitHaloRef.current, { scale: 0.6, opacity: 0, rotateZ: 30 });
      gsap.set(shockwaveCircleRef.current, { scale: 0.5, opacity: 0 });
      gsap.set(coreFlashRef.current, { scale: 0.5, opacity: 0 });
      gsap.set(redCoreGlowRef.current, { opacity: 0, scale: 0.3 });
      gsap.set(silkWavesRef.current, { opacity: 0, scaleX: 0.4 });

      // Brand Typography
      gsap.set(brandNameRef.current, {
        opacity: 0,
        y: 28,
        letterSpacing: "0.14em",
      });
      gsap.set(brandReflectionRef.current, { opacity: 0, y: 15 });
      gsap.set(taglineRef.current, { opacity: 0, y: 14, letterSpacing: "0.2em" });
      gsap.set([sparkleLeftRef.current, sparkleRightRef.current], {
        scale: 0,
        opacity: 0,
        rotate: -30,
      });

      // Skip button
      gsap.set(skipBtnRef.current, { opacity: 0 });
      masterTl.to(skipBtnRef.current, { opacity: 0.85, duration: 0.5 }, 0.2);

      // ── SCENE 1 (0.05s – 0.95s): 3D PIECES CUTTING DISPLAY & GLIDE TO JOIN ──
      // Fade in the 4 floating pieces separated in 3D (Screenshot 1430)
      masterTl
        .to(
          [topBarRef.current, upperStemRef.current, lowerStemRef.current, bottomBarRef.current],
          {
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          },
          0.05
        )
        // Glide all 4 pieces and red core to join seamlessly into 1
        .to(
          [topBarRef.current, upperStemRef.current, lowerStemRef.current, bottomBarRef.current],
          {
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          0.15
        )
        .to(
          redCorePieceRef.current,
          {
            scale: 1,
            opacity: 1,
            z: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          0.15
        )
        .to(
          groundShadowRef.current,
          {
            scaleX: 1,
            opacity: 0.3,
            duration: 0.85,
            ease: "power2.out",
          },
          0.15
        );

      // ── SCENE 2 (0.95s – 1.15s): LOCK JOIN IMPACT & FLASH ──
      masterTl
        // Unified seamless Z takes over instantly upon joining
        .to(
          unifiedZRef.current,
          {
            opacity: 1,
            duration: 0.05,
          },
          0.96
        )
        // Hide individual pieces as the unified Z is active
        .to(
          [topBarRef.current, upperStemRef.current, lowerStemRef.current, bottomBarRef.current],
          {
            opacity: 0,
            duration: 0.05,
          },
          0.96
        )
        // Impact punch on joined emblem
        .to(
          zContainerRef.current,
          {
            scale: 1.1,
            duration: 0.15,
            ease: "power2.out",
          },
          0.95
        )
        .to(
          zContainerRef.current,
          {
            scale: 1.0,
            duration: 0.3,
            ease: "back.out(2)",
          },
          1.1
        )
        // Seam gleam flash across joint
        .fromTo(
          gleamSeamRef.current,
          { scaleX: 0, opacity: 1 },
          { scaleX: 1.4, opacity: 0, duration: 0.45, ease: "power2.out" },
          0.96
        );

      // ── SCENE 3 (1.15s – 2.45s): FULL 360° ROTATION + OUTER GLOWING RING ──
      // 'Z' rotates once (360 degrees) in 3D space
      masterTl
        .to(
          zContainerRef.current,
          {
            rotateY: "+=360",
            duration: 1.3,
            ease: "power2.inOut",
          },
          1.15
        )
        // Subtle 3D tilt wave while turning
        .to(
          zContainerRef.current,
          {
            rotateX: 10,
            duration: 0.65,
            ease: "sine.inOut",
          },
          1.15
        )
        .to(
          zContainerRef.current,
          {
            rotateX: 0,
            rotateY: 0,
            duration: 0.65,
            ease: "sine.inOut",
          },
          1.8
        )
        // Outer glowing ring wraps around 'Z' and spins with it
        .to(
          outerRingContainerRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          1.15
        )
        .fromTo(
          outerRingRef.current,
          { scale: 0.6, opacity: 0, rotateZ: -30 },
          { scale: 1.18, opacity: 1, rotateZ: 220, duration: 1.25, ease: "power1.inOut" },
          1.15
        )
        .fromTo(
          orbitHaloRef.current,
          { scale: 0.55, opacity: 0, rotateZ: 40 },
          { scale: 1.25, opacity: 0.85, rotateZ: -160, duration: 1.25, ease: "power1.inOut" },
          1.15
        );

      // ── SCENE 4 (2.45s – 2.9s): OUTER RING DETONATION BLAST & PARTICLE EXPLOSION ──
      masterTl
        // Ring blast: Outer ring violently detonates outward!
        .to(
          outerRingRef.current,
          {
            scale: 3.8,
            opacity: 0,
            duration: 0.38,
            ease: "power3.out",
          },
          2.45
        )
        .to(
          orbitHaloRef.current,
          {
            scale: 3.6,
            opacity: 0,
            duration: 0.35,
            ease: "power3.out",
          },
          2.45
        )
        .to(
          outerRingContainerRef.current,
          {
            opacity: 0,
            duration: 0.38,
          },
          2.45
        )
        // Shockwave circular detonation ring expanding
        .fromTo(
          shockwaveCircleRef.current,
          { scale: 0.8, opacity: 1 },
          { scale: 3.5, opacity: 0, duration: 0.45, ease: "power2.out" },
          2.45
        )
        // Center core flash bloom
        .fromTo(
          coreFlashRef.current,
          { scale: 0.8, opacity: 0.95 },
          { scale: 2.3, opacity: 0, duration: 0.38, ease: "power2.out" },
          2.45
        )
        // Radial particle burst triggers at the exact blast apex
        .call(() => triggerParticleBurst(), null, 2.45)
        // Red core energy bloom
        .to(
          redCoreGlowRef.current,
          {
            opacity: 0.9,
            scale: 1.5,
            duration: 0.28,
            ease: "power3.out",
          },
          2.45
        )
        .to(
          redCoreGlowRef.current,
          {
            opacity: 0.28,
            scale: 1.0,
            duration: 0.55,
            ease: "power2.out",
          },
          2.73
        )
        // Silk shockwave ribbons expand across the background
        .to(
          silkWavesRef.current,
          {
            opacity: 0.45,
            scaleX: 1.15,
            duration: 0.85,
            ease: "power2.out",
          },
          2.45
        );

      // ── SCENE 5 (2.85s – 4.0s): LUXURY BRAND REVEAL & SPARKLES ──
      masterTl
        // "ONZONE" bold typography reveals
        .to(
          brandNameRef.current,
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0.22em",
            duration: 0.8,
            ease: "power3.out",
          },
          2.85
        )
        // Faint floor reflection
        .to(
          brandReflectionRef.current,
          {
            opacity: 0.12,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          2.9
        )
        // "TIMELESS ELEGANCE" subtitle
        .to(
          taglineRef.current,
          {
            opacity: 0.8,
            y: 0,
            letterSpacing: "0.28em",
            duration: 0.7,
            ease: "power2.out",
          },
          3.15
        )
        // Diamond sparkles glisten
        .to(
          [sparkleLeftRef.current, sparkleRightRef.current],
          {
            scale: 1,
            opacity: 0.85,
            rotate: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(2)",
          },
          3.2
        );

      // Gentle floating levitation on assembled emblem
      gsap.to(zContainerRef.current, {
        y: "-=6",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.8,
      });

      // ── SCENE 6 (4.0s – 4.8s): PAUSE TO APPRECIATE BEFORE CURTAIN EXIT ──
      masterTl.to({}, { duration: 0.85 });
    }, screenRef);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [triggerParticleBurst, onComplete]);

  // Fast skip button for returning visitors
  const handleSkip = () => {
    try {
      sessionStorage.setItem("onzone_welcome_shown", "true");
    } catch (e) {}
    document.body.style.overflow = "";
    gsap.to(screenRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        setIsFinished(true);
        if (onComplete) onComplete();
      },
    });
  };

  if (isFinished) return null;

  return (
    <aside
      ref={screenRef}
      aria-label="Welcome to ONZONE"
      className="fixed inset-0 z-[200] bg-[#FAF7F2] flex flex-col items-center justify-center overflow-hidden select-none pointer-events-auto"
      style={{ willChange: "transform" }}
    >
      {/* ── Studio Ambient Background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(circle_at_center,_#C6963F_0%,_transparent_65%)]"
        aria-hidden="true"
      />
      {/* Ambient Large Watermark */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.025] text-[#0E1A30] font-serif text-[420px] lg:text-[560px] leading-none font-bold"
        aria-hidden="true"
      >
        25
      </div>

      {/* ── Particle Burst Canvas Overlay (Detonation Explosion) ── */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* ── Flowing Silk Energy Waves (Scenes 4 & 5) ── */}
      <div
        ref={silkWavesRef}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-0"
        aria-hidden="true"
      >
        <svg
          className="w-[140%] h-full opacity-45 blur-[1px]"
          viewBox="0 0 1200 300"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 C300,80 500,220 800,120 C1000,60 1100,200 1200,150"
            stroke="url(#silkWaweGradient)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0,170 C250,220 550,90 850,180 C1050,240 1150,130 1200,160"
            stroke="url(#silkWaweGradient)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id="silkWaweGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0" />
              <stop offset="30%" stopColor="#C6963F" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#D11E26" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Skip Button ── */}
      <button
        ref={skipBtnRef}
        type="button"
        onClick={handleSkip}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 font-mono text-[11px] tracking-[0.2em] uppercase text-[#6B665A] hover:text-[#0E1A30] transition-colors cursor-pointer py-1.5 px-3.5 rounded-full border border-[#C6963F]/35 hover:border-[#C6963F] bg-white/60 backdrop-blur-sm z-30 shadow-sm"
      >
        Skip →
      </button>

      {/* ── 3D Stage & Center Hub ── */}
      <div
        ref={stageRef}
        className="relative flex flex-col items-center justify-center text-center px-4 z-20"
        style={{ perspective: "1200px" }}
      >
        {/* Floating Z Emblem Container */}
        <div
          ref={zContainerRef}
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 will-change-transform mb-2"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ── Outer Glowing Ring & Blast Detonation System (Scene 3 & 4) ── */}
          <div
            ref={outerRingContainerRef}
            className="absolute -inset-10 pointer-events-none will-change-transform z-20"
            style={{ transformStyle: "preserve-3d" }}
            aria-hidden="true"
          >
            {/* Primary Glowing Outer Ring */}
            <div
              ref={outerRingRef}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <svg className="w-full h-full" viewBox="0 0 240 240" fill="none">
                {/* Outer luminous halo ring */}
                <ellipse
                  cx="120"
                  cy="120"
                  rx="102"
                  ry="42"
                  stroke="url(#ringElectricGradient)"
                  strokeWidth="3.2"
                  strokeDasharray="160 25"
                  filter="url(#glowNeonOuter)"
                  transform="rotate(-18 120 120)"
                />
                {/* Secondary inner golden filament */}
                <ellipse
                  cx="120"
                  cy="120"
                  rx="98"
                  ry="40"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  strokeDasharray="90 50"
                  opacity="0.9"
                  transform="rotate(-18 120 120)"
                />
                <defs>
                  <linearGradient id="ringElectricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
                    <stop offset="35%" stopColor="#00E5FF" stopOpacity="1" />
                    <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="85%" stopColor="#D11E26" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C6963F" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="glowNeonOuter" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Orbiting Secondary Halo Ring */}
            <div
              ref={orbitHaloRef}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <svg className="w-full h-full" viewBox="0 0 240 240" fill="none">
                <ellipse
                  cx="120"
                  cy="120"
                  rx="96"
                  ry="38"
                  stroke="url(#crimsonGoldGradient)"
                  strokeWidth="2.2"
                  strokeDasharray="130 35"
                  filter="url(#glowCrimsonHalo)"
                  transform="rotate(28 120 120)"
                />
                <defs>
                  <linearGradient id="crimsonGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D11E26" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#D11E26" stopOpacity="1" />
                    <stop offset="85%" stopColor="#C6963F" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="glowCrimsonHalo" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Blast Shockwave Expanding Circle (Scene 4) */}
          <div
            ref={shockwaveCircleRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-2 border-[#00E5FF] shadow-[0_0_24px_rgba(0,229,255,0.85)] pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Blast Central Core Flash (Scene 4) */}
          <div
            ref={coreFlashRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(209, 30, 38, 0.5) 45%, transparent 70%)",
              filter: "blur(6px)",
            }}
            aria-hidden="true"
          />

          {/* Central Red Core Glow Pulse */}
          <div
            ref={redCoreGlowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(209, 30, 38, 0.75) 0%, rgba(209, 30, 38, 0.25) 45%, transparent 70%)",
              filter: "blur(8px)",
            }}
            aria-hidden="true"
          />

          {/* ── PIECE 1: Top Bar & Corner Hook (Screenshot 1430 Top-Left) ── */}
          <div
            ref={topBarRef}
            className="absolute inset-0 overflow-hidden will-change-transform drop-shadow-[0_10px_20px_rgba(14,26,48,0.22)]"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 32%, 35% 32%, 18% 18%, 0% 18%)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="/assets/onzone-logo.png"
              alt="ONZONE Logo Top Bar Piece"
              className="absolute top-0 left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
              style={{ width: "502%", height: "259.3%" }}
            />
          </div>

          {/* ── PIECE 2: Upper-Right Diagonal Stem (Screenshot 1430 Top-Right) ── */}
          <div
            ref={upperStemRef}
            className="absolute inset-0 overflow-hidden will-change-transform drop-shadow-[0_10px_20px_rgba(14,26,48,0.22)]"
            style={{
              clipPath: "polygon(48% 20%, 100% 20%, 100% 68%, 56% 68%)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="/assets/onzone-logo.png"
              alt="ONZONE Logo Upper Diagonal Piece"
              className="absolute top-0 left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
              style={{ width: "502%", height: "259.3%" }}
            />
          </div>

          {/* ── PIECE 3: Lower-Left Diagonal Stem (Screenshot 1430 Center-Left) ── */}
          <div
            ref={lowerStemRef}
            className="absolute inset-0 overflow-hidden will-change-transform drop-shadow-[0_10px_20px_rgba(14,26,48,0.22)]"
            style={{
              clipPath: "polygon(0% 32%, 56% 32%, 44% 75%, 0% 75%)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="/assets/onzone-logo.png"
              alt="ONZONE Logo Lower Diagonal Piece"
              className="absolute top-0 left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
              style={{ width: "502%", height: "259.3%" }}
            />
          </div>

          {/* ── PIECE 4: Bottom Bar & Corner Hook (Screenshot 1430 Bottom-Right) ── */}
          <div
            ref={bottomBarRef}
            className="absolute inset-0 overflow-hidden will-change-transform drop-shadow-[0_10px_20px_rgba(14,26,48,0.22)]"
            style={{
              clipPath: "polygon(0% 68%, 100% 68%, 100% 100%, 0% 100%)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="/assets/onzone-logo.png"
              alt="ONZONE Logo Bottom Bar Piece"
              className="absolute top-0 left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
              style={{ width: "502%", height: "259.3%" }}
            />
          </div>

          {/* ── Red Core Slice (Nestled between stems) ── */}
          <div
            ref={redCorePieceRef}
            className="absolute inset-0 overflow-hidden will-change-transform drop-shadow-[0_6px_14px_rgba(209,30,38,0.35)]"
            style={{
              clipPath: "polygon(42% 16%, 64% 16%, 56% 68%, 42% 68%)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="/assets/onzone-logo.png"
              alt="ONZONE Logo Red Core"
              className="absolute top-0 left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
              style={{ width: "502%", height: "259.3%" }}
            />
          </div>

          {/* ── UNIFIED ASSEMBLED Z (Seamless immaculate layer upon joining) ── */}
          <div
            ref={unifiedZRef}
            className="absolute inset-0 overflow-hidden will-change-transform drop-shadow-[0_12px_24px_rgba(14,26,48,0.22)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="/assets/onzone-logo.png"
              alt="ONZONE Complete Logo"
              className="absolute top-0 left-1/2 -translate-x-1/2 max-w-none pointer-events-none select-none"
              style={{ width: "502%", height: "259.3%" }}
            />
          </div>

          {/* Impact Light Gleam along the diagonal joining line */}
          <div
            ref={gleamSeamRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[3px] bg-gradient-to-r from-transparent via-[#C6963F] via-50% to-transparent pointer-events-none rotate-[26deg] shadow-[0_0_14px_rgba(198,150,63,0.9)] z-10"
            aria-hidden="true"
          />
        </div>

        {/* 3D Ground Shadow below the hovering Z */}
        <div
          ref={groundShadowRef}
          className="w-32 sm:w-40 h-4 bg-[#0E1A30]/25 rounded-full blur-[7px] mb-6 pointer-events-none"
          aria-hidden="true"
        />

        {/* ── Brand Typography Lockup (Scene 5) ── */}
        <div ref={textContainerRef} className="relative flex flex-col items-center">
          {/* Diamond Sparkle Left */}
          <span
            ref={sparkleLeftRef}
            className="absolute -left-7 sm:-left-10 top-1 text-[#C6963F] text-sm select-none pointer-events-none"
            aria-hidden="true"
          >
            ✦
          </span>

          {/* Main ONZONE Headline */}
          <h1
            ref={brandNameRef}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#0E1A30] font-normal tracking-[0.22em] uppercase leading-none mb-2"
          >
            ONZONE
          </h1>

          {/* Subtle Faint Floor Reflection */}
          <div
            ref={brandReflectionRef}
            className="font-serif-luxury text-2xl sm:text-3xl text-[#0E1A30] font-normal tracking-[0.22em] uppercase leading-none select-none pointer-events-none -scale-y-100 opacity-0 -mt-1 blur-[1.5px] h-3 overflow-hidden"
            aria-hidden="true"
          >
            ONZONE
          </div>

          {/* Gold Accent Divider */}
          <div className="w-12 h-[1.5px] bg-[#C6963F] my-2 rounded-full" aria-hidden="true" />

          {/* Timeless Elegance Subtitle */}
          <p
            ref={taglineRef}
            className="font-mono text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#6B665A] font-medium"
          >
            Timeless Elegance
          </p>

          {/* Diamond Sparkle Right */}
          <span
            ref={sparkleRightRef}
            className="absolute -right-7 sm:-right-10 top-1 text-[#C6963F] text-sm select-none pointer-events-none"
            aria-hidden="true"
          >
            ✦
          </span>
        </div>
      </div>
    </aside>
  );
};

export default WelcomeScreen;

