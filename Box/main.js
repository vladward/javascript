// Событие event (e)
// Генерируется объект со сведениями о произошедшем событии
// Вызывается обработчик
// Объект со сведениями о произошедшем передается в качестве параметра в обработчик

const sml = document.getElementById("small")
const med = document.getElementById("medium")
const big = document.getElementById("big")

// const onClickHandler = () => {
//     alert('kuku')// работает  // без return это сайд эффект
//     return // undefined
//     return () => alert('kuku') //работает
// }
//
// sml.onclick = onClickHandler
// const hi = sml.onclick
// hi()


// const onClickHandler = (word) => {
//
//     return () => alert(word)
// }
// sml.onclick = onClickHandler()//undefined
// sml.onclick = onClickHandler('kyky')//вызывает обе функции
// med.onclick = onClickHandler('kuku')//вызывает только эту

// sml.addEventListener('click', onClickHandler('kuku')) //работает
// // sml.addEventListener('click', onClickHandler()) //undefined
//
// sml.addEventListener('click', onClickHandler('kuku')) //работает
// sml.addEventListener('click', onClickHandler('kuku')) //         два раза

// sml.onclick = () => {
//     alert('kuku')
//     alert('kyky')
// }                    // работает два раза

const onClickHandler = (e) => {
    // e.preventDefault // отменяет поведение элемента по умолчанию
    // e.stopPropagation() // останавливает всплытие через родительские элементы
    alert(e.currentTarget.id)
}

sml.addEventListener('click', onClickHandler)
med.addEventListener('click', onClickHandler)
big.addEventListener('click', onClickHandler)

// e.target - элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget - элемент, который вызвал обработчик в процессе всплытия события или погружения
