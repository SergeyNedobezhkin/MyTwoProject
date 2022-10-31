const menu = () => {
    const menuBig = () => {
        const menuBtn = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');

        document.body.addEventListener('click', e => {
            if (e.target.closest('.menu') === menuBtn) {
                return menu.classList.toggle('active-menu');
            }

            if ((e.target === closeBtn) || (e.target.closest('ul>li>a')) || (!e.target.closest('menu'))) {
                return menu.classList.remove('active-menu');
            }
        });
    };
    menuBig();
};
export default menu;

