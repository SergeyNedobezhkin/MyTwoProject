const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
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

        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                modal.style.display = 'none';
            }
        });
    });
};
export default modal;
