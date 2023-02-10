import { IObject } from "./interface"
import { fetchQuotes } from "./api"

let quotes: IObject

/**
 * Render Quotes to DOM
 */
export const renderAllQuotes = async () => {
  document.querySelector('#loading')!.classList.remove('hidden')
  try {
    quotes = await fetchQuotes()
  } catch (err) {
    console.log(err)
  }
  document.querySelector('#loading')!.classList.add('hidden')
  document.querySelector('#quotes')!.innerHTML = quotes.data
  .map( q => `<li>${q.content}</li>`).join('')
}

/**
 * Render random Quote
 */
export const renderRandomQuote = async () => {
  document.querySelector('#loading')!.classList.remove('hidden')
   try {
    quotes = await fetchQuotes()
  } catch (err) {
    console.log(err)
  }
  shuffle(quotes.data)
  document.querySelector('#loading')!.classList.add('hidden')
  document.querySelector('#rnd__quote')!.innerHTML = `
  <p>${quotes.data[0].content} <span>${quotes.data[0].name}</span></p>`
}

/**
 * Clear rendered quotes
 */
export const clearAll = () => {
  setTimeout(() => {
    document.querySelector('#rnd__quote')!.innerHTML = ''
    document.querySelector('#rnd__quote')!.classList.add('hidden')
    document.querySelector('#quotes')!.innerHTML = ''
    document.querySelector('#quotes')!.classList.add('hidden')
  }, 500);
}
export const clearQuote = () => {
  document.querySelector('#about')!.classList.add('hidden')
    document.querySelector('#rnd__quote')!.innerHTML = ''
    document.querySelector('#rnd__quote')!.classList.add('hidden')
}
export const clearQuotes = () => {
  document.querySelector('#about')!.classList.add('hidden')
    document.querySelector('#quotes')!.innerHTML = ''
    document.querySelector('#quotes')!.classList.add('hidden')
}
/**
 * Fisher-Yates Shuffle functions
 */
const shuffle = (a: any) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const t = a[i]
    a[i] = a[j]
    a[j] = t
  }
}