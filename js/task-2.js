// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.


const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector("#name-output")


inputRef.addEventListener("input", (event)=>{
    if(event.target.value.trim() === ''){
        spanRef.textContent = "незнайомець"
    }else{
        spanRef.textContent = event.target.value;
    }
        // console.log(event.target.value);

})