const calculator = () => {

    const calc = () => {
        const calcBlock = document.querySelector('.calc-block');

        const calcSquare = calcBlock.querySelector('.calc-square');
        const calcCount = calcBlock.querySelector('.calc-count');
        const calcDay = calcBlock.querySelector('.calc-day');
        const mes = document.querySelector('.mess');
        const formName = document.querySelectorAll('.form-name');
        const topForm = document.querySelector('.top-form');
        const formEmail = document.querySelectorAll('.form-email');
        const formPhone = document.querySelectorAll('.form-phone');

        const addNumber = (e) => {
            e.target.value = e.target.value.replace(/\D+/, "");
            console.log(e.target.value = e.target.value.replace(/\D+/, ""));
        };

        const addText = (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\\" "]/gi, "");
        };
        const addEmail = (e) => {
            e.target.value = e.target.value.replace(/[^a-z\-\!@-_.!~*'\" "]/gi, "");
        };

        const addPhone = (e) => {
            e.target.value = e.target.value.replace(/[^0-9()-]/gi, "");
        };

        calcSquare.addEventListener('input', addNumber);
        calcCount.addEventListener('input', addNumber);
        calcDay.addEventListener('input', addNumber);

        mes.addEventListener('input', addText);
        formName[0].addEventListener('input', addText);
        formName[1].addEventListener('input', addText);
        topForm.addEventListener('input', addText);

        formPhone[0].addEventListener('input', addPhone);
        formPhone[1].addEventListener('input', addPhone);
        formPhone[2].addEventListener('input', addPhone);

        formEmail[0].addEventListener('input', addEmail);
        formEmail[1].addEventListener('input', addEmail);
        formEmail[2].addEventListener('input', addEmail);
    };
    calc();
};
export default calculator;