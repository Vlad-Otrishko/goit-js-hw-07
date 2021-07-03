const containerRef = document.querySelector('div#boxes');
const inputRef = document.querySelector('input[type="number"]');
const buttonCreateRef = document.querySelector('button[data-action="render"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');

let quantity;

const createDiv = function (quantity) {
    for (let i = 0; i < quantity; i += 1) {
        containerRef.insertAdjacentHTML(
          'beforeend',
          `<div 
       style="width: ${30 + 10 * i}px; height:${
            30 + 10 * i
          }px; margin:10px; background-color:rgb(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255})"> </div>`
        );
    }
}

buttonCreateRef.addEventListener("click", () => { quantity = Number(inputRef.value);createDiv(quantity);});
buttonDestroy.addEventListener("click", () => containerRef.innerHTML='');
