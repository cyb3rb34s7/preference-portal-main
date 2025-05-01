
const confetti = () => {
  // Simple confetti effect for completion screen
  const colors = ['#3b82f6', '#ef4444', '#a855f7', '#84cc16', '#ec4899'];
  
  const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.top = '0';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 10}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '1000';
    confetti.style.opacity = '0.8';
    confetti.style.transform = 'translateZ(0)';
    
    document.body.appendChild(confetti);
    
    const animationDuration = Math.random() * 3000 + 2000;
    
    confetti.animate([
      { transform: 'translateY(0) rotate(0)', opacity: 0.8 },
      { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: animationDuration,
      easing: 'cubic-bezier(.29, .8, .48, .93)'
    });
    
    setTimeout(() => {
      document.body.removeChild(confetti);
    }, animationDuration);
  };
  
  // Create multiple confetti pieces
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      createConfetti();
    }, i * 50);
  }
};

export default confetti;
