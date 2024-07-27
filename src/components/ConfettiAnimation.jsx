import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ConfettiAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <DotLottieReact
        src="https://lottie.host/f8dcce66-2773-48d8-ad20-247fe5fdb1ba/9ti3ErknrQ.lottie"
        autoplay
        loop
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  );
};

export default ConfettiAnimation;
