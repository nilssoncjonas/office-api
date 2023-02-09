import { IQuotes } from "./interface"
import { fetchQuotes } from "./api"

let quotes : IQuotes[] = []

/**
 * Render Quotes to DOM
 */
export const renderAllQuotes = async () => {
  // add loading icon
  try {
    quotes = await fetchQuotes()
    console.log(quotes)
  } catch (err) {
    console.log(err)
  }
  // remove loading icon
  document.querySelector('#quotes')!.innerHTML = quotes
  .map( q => `<li>${q.content}</li>`).join('')
}

/**
 * Render random Quote
 */
export const renderRandomQuote = async () => {
   // add loading icon
   try {
    quotes = await fetchQuotes()
    console.log(quotes)
  } catch (err) {
    console.log(err)
  }
  // remove loading icon
  shuffle(quotes)
  document.querySelector('#rnd__quote')!.innerHTML = `
  <p>${quotes[0].content} <span>${quotes[0].name}</span></p>`
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