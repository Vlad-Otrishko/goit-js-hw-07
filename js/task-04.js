const counterEl = document.querySelector('#value');
let counterValue = Number(counterEl.textContent);
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const increment = () => { counterValue += 1; counterEl.textContent = counterValue;};
const decrement = ()=>{ counterValue -= 1;  counterEl.textContent = counterValue;
};


decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);






