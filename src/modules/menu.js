const menu = () => {
    const menuBig = () => {
        const menuBtn = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');

        const funcMenu = (e) => {
            if (e.target.closest('.menu') === menuBtn) {
                menu.classList.toggle('active-menu');
            } else if ((e.target === closeBtn) || (e.target.closest('ul>li>a')) || (!e.target.closest('menu'))) {
                menu.classList.remove('active-menu');
            } else {
                return;
            }
        };
        document.body.addEventListener('click', funcMenu);
    };
    menuBig();
};
export default menu;

