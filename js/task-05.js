const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const onInputFunction = (event) => { 
    outputRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") { outputRef.textContent = 'незнакомец';}
    }

inputRef.addEventListener('input', onInputFunction);