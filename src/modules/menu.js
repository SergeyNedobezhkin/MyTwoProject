const menu = () => {

    const menuBig = () => {
        const menuBtn = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li>a');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };


        menuBtn.addEventListener('click', handlerMenu);

        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(elem => {
            elem.addEventListener('click', handlerMenu);
        });
    };
    menuBig();

};
export default menu;
