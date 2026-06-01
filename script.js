// Minimalist JS logic for simple page intro effects and falling particles
document.addEventListener('DOMContentLoaded', () => {
    // Add load state class to body to trigger smooth entrance transitions if needed
    document.body.classList.add('page-loaded');

    // Subtle parallax effect on background glow according to mouse movement
    const glow = document.querySelector('.glow-accent');
    if (glow && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) * 0.05;
            const y = (e.clientY - window.innerHeight / 2) * 0.05;
            glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
    }

    // Spawning system for falling money, coins, stars, and bees
    const moneySymbols = ['💵', '💸', '🪙', '💶', '💷', '💰', '⭐', '✨', '🌟', '🐝'];
    const createMoneyParticle = () => {
        const particle = document.createElement('div');
        particle.classList.add('money-particle');
        
        // Pick a random money, star, or bee symbol
        particle.innerText = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];
        
        // Spawn only on the left (0 to 20vw) or right (80 to 100vw) margins to avoid blocking the center text
        const isLeft = Math.random() < 0.5;
        const leftPos = isLeft ? (Math.random() * 20) : (Math.random() * 20 + 80);
        particle.style.left = leftPos + 'vw';
        
        // Random animation duration between 4 and 8 seconds
        const duration = Math.random() * 4 + 4;
        particle.style.animationDuration = duration + 's';
        
        // Random scale factor for depth effect
        const scale = Math.random() * 0.6 + 0.7; // 0.7 to 1.3
        particle.style.transform = `scale(${scale})`;
        
        document.body.appendChild(particle);
        
        // Clean up DOM after animation ends to prevent memory leakage
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    };

    // Periodically spawn a new falling particle
    setInterval(createMoneyParticle, 350);
});
