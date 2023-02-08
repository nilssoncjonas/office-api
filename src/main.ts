import { IQuote } from "./interface"
import { fetchQuotes } from "./api"
let quote : IQuote[] = []
/**
 * Get quotes
 */
const getQuotes = async () => {
  quote = await fetchQuotes()
  console.log(quote)
}
getQuotes()