const inputRef = document.querySelector('input#validation-input');
console.dir(inputRef);
const dataLengthRef = inputRef.getAttribute('data-length');
console.log(dataLengthRef);
const onChange = (event) => {
    if (inputRef.value.length === Number(dataLengthRef)) { return inputRef.setAttribute('class', 'valid'); }
    inputRef.setAttribute('class', 'invalid');
}
inputRef.addEventListener('change', onChange);