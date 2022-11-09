import {animate} from "./helpers";
const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popupContent = document.querySelector('.popup-content');
    const modalMenu = () => {
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                popupContent.style.left = (42 * progress) + '%';
                popupContent.style.top = (25 * progress) + '%';
            }
        });
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