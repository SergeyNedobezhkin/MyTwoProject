"use strict";
const check = () => {

    const checked = () => {
        const calcBlock = document.querySelector('.calc-block');
        const calcInput = calcBlock.querySelectorAll('input[type = text]');
        const mes = document.querySelector('.mess');
        const formName = document.querySelectorAll('input[placeholder="Ваше имя"]');
        const formEmail = document.querySelectorAll('input[placeholder="E-mail"]');
        const formPhone = document.querySelectorAll('input[placeholder="Номер телефона"]');

        const addNumber = (event) => {
            event.target.value = event.target.value.replace(/\D+/, "");
            console.log(event.target.value = event.target.value.replace(/\D+/, ""));
        };

        const addText = (event) => {
            event.target.value = event.target.value.replace(/[^а-яё\- ]/gi, "");
        };
        const addEmail = (event) => {
            event.target.value = event.target.value.replace(/[^a-z0-9\-!@_.!~*']/gi, "");
        };

        const addPhone = (event) => {
            event.target.value = event.target.value.replace(/[^0-9()-]/gi, "");
        };

        mes.addEventListener('input', addText);

        calcInput.forEach(item => {
            item.addEventListener('input', addNumber);
        });

        formName.forEach(item => {
            item.addEventListener('input', addText);
        });

        formPhone.forEach(item => {
            item.addEventListener('input', addPhone);
        });

        formEmail.forEach(item => {
            item.addEventListener('input', addEmail);
        });
    };
    checked();
};
export default check;