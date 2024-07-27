import React, { useEffect, useRef } from 'react';

const ConfettiAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadLottiePlayer = async () => {
      if (!window.lottie) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
        script.async = true;
        document.body.appendChild(script);
        await new Promise((resolve) => script.onload = resolve);
      }

      if (containerRef.current) {
        const animation = document.createElement('lottie-player');
        animation.src = "https://lottie.host/6be25d85-f1ef-4814-9e6b-45a790e6aa14/PQvGO74Q3D.json";
        animation.background = "transparent";
        animation.speed = "1";
        animation.style.width = "300px";
        animation.style.height = "300px";
        animation.loop = true;
        animation.autoplay = true;

        containerRef.current.appendChild(animation);
      }
    };

    loadLottiePlayer();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
};

export default ConfettiAnimation;
