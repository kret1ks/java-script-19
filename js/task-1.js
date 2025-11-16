// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

const inputRef = document.querySelectorAll('input[name="color"]')

inputRef.forEach((input) => {
  input.addEventListener("change", (event) => {
   console.log(event.target.value);
   document.body.style.background = event.target.value

  }) 
})
const activeInput = document.querySelector('input[type="radio"]:checked')

if(activeInput){
    document.body.style.background = activeInput.value
}










