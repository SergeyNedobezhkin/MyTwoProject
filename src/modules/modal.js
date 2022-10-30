const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = document.querySelector('.popup-content');

    const modalMenu = () => {
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
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            modalMenu();
        });
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
};
export default modal;
