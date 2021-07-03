const spanRef = document.querySelector('span#text'); // привязываем переменную к спану
const sliderRef = document.querySelector("input#font-size-control"); //привязываем переменную к ползунку
//у спана нет своего размера шрифта (style.fontSize не определен), поэтому ищем  размер, унаследованный от браузера:
const initialFontSize = parseInt(window.getComputedStyle(spanRef).fontSize); 
const initialSliderValue = Number(sliderRef.value); //начальная позиция ползунка (числовое значение)
//Функция: по событию изменяем шрифт - начальное значение шрифта/ начальное значение ползунка * текущее значение ползунка
sliderRef.addEventListener("input", (event) => spanRef.style.fontSize = `${initialFontSize / initialSliderValue * event.currentTarget.value}px`);