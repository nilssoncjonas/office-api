import { clearAll, clearQuote, clearQuotes, renderAllQuotes, renderRandomQuote } from "./functions";



/**
 * 'Create' Buttons
 */

document.querySelector('#rnd__btn')!.addEventListener('click', () => {
  clearQuotes()
  document.querySelector('#rnd__quote')!.classList.remove('hidden')
  renderRandomQuote()
})

document.querySelector('#all__btn')!.addEventListener('click', () => {
  clearQuote()
  document.querySelector('#quotes')!.classList.remove('hidden')
  renderAllQuotes()
})  

document.querySelector('#clr__btn')!.addEventListener('click', () => {
  clearAll()
})    

document.querySelector('#a__about')!.addEventListener('click', () => {
  clearAll()
  document.querySelector('#about')!.classList.toggle('hidden')
})