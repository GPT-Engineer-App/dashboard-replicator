const ConfettiAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <dotlottie-player
        src="https://lottie.host/f8dcce66-2773-48d8-ad20-247fe5fdb1ba/9ti3ErknrQ.lottie"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default ConfettiAnimation;
