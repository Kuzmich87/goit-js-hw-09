import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

document.querySelector('[data-start]').setAttribute('disabled', '');

const btnStart = document.querySelector('[data-start]');
const inputField = document.querySelector('#datetime-picker');

let timerId = null;
let timeEnd = null;

//*Принемает число, приводит к строке и добавляет в начало 0, если число меньше 2-х знаков
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

//*-Принемает время в милисекундах
//*-Высчитывает сколько в них вмещаеться часох/минут/секунд
//*-Возвращает обьект с свойствами days, hours, minutes,seconds.
//*-Адская копипаста со стека
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
 
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  

  return { days, hours, minutes, seconds };
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      window.alert("Please choose a date in the future");
      
    }
    else {
      btnStart.removeAttribute('disabled');
      timeEnd = selectedDates[0];
    }
  },
};



const timer = {
  start() {
    // const startTime = Date.now();
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      //const deltaTime = currentTime - startTime;
      const deltaTime = timeEnd - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      console.log(`${days}::${hours}::${minutes}::${seconds}`);

      document.querySelector('[data-days]').innerHTML = days;
      document.querySelector('[data-hours]').innerHTML = hours;
      document.querySelector('[data-minutes]').innerHTML = minutes;
      document.querySelector('[data-seconds]').innerHTML = seconds;
      
      if (deltaTime <= 0) {
      clearInterval(timerId);
      } 
    }, 1000
    )
   
  }
   
};

btnStart.addEventListener("click", () => {
  timer.start();
})

//* Инициализация библиотеки
 flatpickr(document.querySelector('input[type="text"]'), options)