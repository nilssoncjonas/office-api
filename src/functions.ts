import { IQuote } from "./interface"
import { fetchQuotes } from "./api"
let quote : IQuote[] = []
/**
 * Get quotes
 */
export const getQuotes = async () => {
  quote = await fetchQuotes()
  console.log(quote)  
}
/**
 * Render Quotes to DOM
 */
export const renderAllQuotes = () => {
  document.querySelector('#quotes')!.innerHTML = quote
  .map( q => `<li>${q.content}</li>`).join('')
}

/**
 * Render random Quote
 */
export const renderRandomQuote = () => {
 
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