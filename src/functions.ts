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