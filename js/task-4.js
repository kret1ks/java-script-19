// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

 
 
 
 
const inputRef = document.querySelector("#font-size-control")
const textRef = document.querySelector("#text")

textRef.style.fontsize = inputRef.value + "px"

    inputRef.addEventListener("input", (event)=>{      
        const fontSize = event.target.value + "px"
        textRef.style.fontSize = fontSize
    })