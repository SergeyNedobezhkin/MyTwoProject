const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = document.querySelector('.popup-content');

    const modalMenu = () => {
        let count = 0;
        const animate = () => {
            count++;
            if (count < 62 && screen.width > 768) {
                popupContent.style.left = count * 0.624 + '%';
            } else {
                popupContent.style.left = " ";
            }
        };
        setInterval(animate, 2);
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