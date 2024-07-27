import React from 'react';
import { DotLottiePlayer } from '@lottiefiles/dotlottie-react';

const ConfettiAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <DotLottiePlayer
        src="https://lottie.host/6be25d85-f1ef-4814-9e6b-45a790e6aa14/PQvGO74Q3D.json"
        autoplay
        loop
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  );
};

export default ConfettiAnimation;
