import { renderAllQuotes, renderRandomQuote } from "./functions";



/**
 * 'Create' Buttons
 */

document.querySelector('#rnd__btn')!.addEventListener('click', () => {
  renderRandomQuote()
})

document.querySelector('#all__btn')!.addEventListener('click', () => {
  renderAllQuotes()
})  

document.querySelector('#clr__btn')!.addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('#quotes')!.innerHTML = ''
    document.querySelector('#rnd__quote')!.innerHTML = ''
  }, 750);
})
    

