// Example: Dynamic background shift (simplified concept)
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.background = `linear-gradient(${x*360}deg, #0072ff, #00c6ff)`;
});
