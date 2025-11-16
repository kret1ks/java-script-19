// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.



const inputRef = document.querySelector("#validation-input")


inputRef.addEventListener("blur", onInputBluer)

function onInputBluer(event){
    const requiredLenght =Number(event.target.dataset.length)
    const curentLength = event.target.value.length
    if(requiredLenght === curentLength){
        inputRef.classList.add("valid")
    }else{
        inputRef.classList.add("invalid")
    }
}
