
const timer = deadline => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    let idInterval = 0;
    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const hours = Math.floor(timeRemaining / 60 / 60);

        return { timeRemaining, hours, minutes, seconds };
    }
    function addZero(number) {
        if (String(number).length === 1) {
            return '0' + number;
        } else {
            return String(number);
        }
    }

    const updateClock = () => {
        const getTime = getTimeRemaining();

        if (getTime.timeRemaining > 0) {
            timerHours.textContent = addZero(getTime.hours);
            timerMinutes.textContent = addZero(getTime.minutes);
            timerSeconds.textContent = addZero(getTime.seconds);
        } else if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
            // const dateStop = new Date(deadline);
            // dateStop.setDate(dateStop.getDate() + 1);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };
    idInterval = setInterval(updateClock, 1000);
};

export default timer;












