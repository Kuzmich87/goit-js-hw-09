
const refs={
   startBtn: document.querySelector('[data-start]'),
   stopBtn: document.querySelector('[data-stop]'),
}
// console.log(refs.startBtn);
// console.log(refs.stopBtn);

let timerId = null;

//* функция изминения цветов
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//*Функция на кнопку старт
refs.startBtn.addEventListener("click", () => {
        const color = getRandomHexColor();
        document.body.setAttribute(
        'style',
        'background-color:'+ color,
        );
        refs.startBtn.setAttribute('disabled', true);
    timerId = setInterval(() => {
       const color = getRandomHexColor();
        document.body.setAttribute(
        'style',
        'background-color:'+ color,
        );
    console.log(setInterval);
  }, 1000);
});

//*Функция на кнопку стоп
refs.stopBtn.addEventListener("click", () => {
    refs.startBtn.removeAttribute('disabled');
    clearInterval(timerId);
});







