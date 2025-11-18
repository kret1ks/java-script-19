// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно




const inputRef = document.querySelectorAll('input[name="color"]')


inputRef.forEach((input)=>{
  input.addEventListener("change", (event)=>{
    document.body.style.background = event.target.value
  })
})


const fonActive = document.querySelector('input[type="radio"]:checked')


if(fonActive){
  document.body.style.background = fonActive.value
}




























