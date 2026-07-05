import React, { useEffect, useRef } from "react";

// Full-bleed hero background video with a vanilla-JS opacity fade loop
// (fade in on first playable frame, fade out ~0.55s before the clip ends,
// then seamlessly loop). Uses refs + requestAnimationFrame so it never
// touches React re-renders on every frame.

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4";

const FADE_DURATION_MS = 500;
const PRE_END_THRESHOLD_S = 0.55;

const HeroBackgroundVideo = () => {
  const videoRef = useRef(null);
  const rafIdRef = useRef(null);
  const fadeOutTriggeredRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const animateOpacity = (from, to, duration, onDone) => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      const start = performance.now();
      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        video.style.opacity = String(from + (to - from) * progress);
        if (progress < 1) {
          rafIdRef.current = requestAnimationFrame(step);
        } else {
          rafIdRef.current = null;
          if (onDone) onDone();
        }
      };
      rafIdRef.current = requestAnimationFrame(step);
    };

    const currentOpacity = () => parseFloat(video.style.opacity || "0");

    const playAndFadeIn = () => {
      fadeOutTriggeredRef.current = false;
      video.play().catch(() => {});
      animateOpacity(currentOpacity(), 1, FADE_DURATION_MS);
    };

    const handleCanPlay = () => {
      playAndFadeIn();
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= PRE_END_THRESHOLD_S && !fadeOutTriggeredRef.current) {
        fadeOutTriggeredRef.current = true;
        animateOpacity(currentOpacity(), 0, FADE_DURATION_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        playAndFadeIn();
      }, 100);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 3) {
      playAndFadeIn();
    } else {
      // Some browsers only run the resource-selection algorithm once on
      // initial parse; force it explicitly so the video reliably loads.
      video.load();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        data-testid="hero-background-video"
        src={VIDEO_SRC}
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        style={{ opacity: 0 }}
      />
      <div
        data-testid="hero-background-video-overlay"
        className="absolute inset-0 bg-black/40 pointer-events-none"
      />
    </>
  );
};

export default HeroBackgroundVideo;
