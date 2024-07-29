const ConfettiAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
      <dotlottie-player
        src="https://lottie.host/f8dcce66-2773-48d8-ad20-247fe5fdb1ba/9ti3ErknrQ.lottie"
        background="transparent"
        speed="1"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default ConfettiAnimation;
