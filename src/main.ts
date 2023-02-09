import { clearAll, clearQuote, clearQuotes, renderAllQuotes, renderRandomQuote } from "./functions";



/**
 * 'Create' Buttons
 */

document.querySelector('#rnd__btn')!.addEventListener('click', () => {
  clearQuotes()
  renderRandomQuote()
})

document.querySelector('#all__btn')!.addEventListener('click', () => {
  clearQuote()
  renderAllQuotes()
})  

document.querySelector('#clr__btn')!.addEventListener('click', () => {
  clearAll()
})
    

