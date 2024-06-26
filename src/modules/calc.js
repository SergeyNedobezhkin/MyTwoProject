"use strict";
const calc = (price) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;
        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcTypeValue === 1) {
            price = 100;
        }
        if (calcTypeValue === 1.4) {
            price = 120;
        }
        if (calcTypeValue === 2) {
            price = 110;
        }

        if (calcCount.value > 1) {

            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcTypeValue && calcTypeValue) {
            totalValue = Math.ceil(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);
        } else {
            totalValue = 0;
        }

        total.textContent = totalValue;
    };
    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare || e.target === calcDay || e.target === calcCount) {
            countCalc();
        }
    });
};
export default calc;