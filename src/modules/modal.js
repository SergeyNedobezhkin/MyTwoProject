const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = document.querySelector('.popup-content');
    console.log(screen);
    const modalMenu = () => {
        if(screen.width > 768){
            let start = Date.now(); // запомнить время начала
            let timer = setInterval(function () {
                // сколько времени прошло с начала анимации?
                let timePassed = Date.now() - start;
    
                if (timePassed >= 500) {
                    clearInterval(timer); // закончить анимацию через 2 секунды
                    return;
                }
    
                // отрисовать анимацию на момент timePassed, прошедший с начала анимации
                draw(timePassed);
            }, 1);
            // в то время как timePassed идёт от 0 до 2000
            // left изменяет значение от 0px до 400px
        }
             
        function draw(timePassed) {
            popupContent.style.left = timePassed / 0.8 + 'px';
        }

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
