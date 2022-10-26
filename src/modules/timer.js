
let idInterval = 0;

const timer = (deadline) => {

    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        return { timeRemaining, hours, minutes, seconds };
    };

    function addZero(num) {
        if (num > 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerHours.textContent = addZero(getTime.hours);
        timerMinutes.textContent = addZero(getTime.minutes);
        timerSeconds.textContent = addZero(getTime.seconds);

        if (getTime.timeRemaining < 0) {
            clearInterval(idInterval);
        }
       
    };
    idInterval = setInterval(updateClock, 1000, timer);
};
export default timer;



