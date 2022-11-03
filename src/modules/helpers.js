
const animate = () => {
    const popupContent = document.querySelector('.popup-content');
    
    let count = 0;
    let idInterval;
    const animate = () => {
        count++;
        idInterval = requestAnimationFrame(animate);

        if (count < 41 && screen.width > 768) {
            popupContent.style.left = count * 1 + '%';
        } else if (count > 41 && screen.width < 768) {
            popupContent.style.left = " ";
        } else {
            cancelAnimationFrame(idInterval);
        }
    };
    animate();
};

export { animate };