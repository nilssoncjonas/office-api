import { IQuotes } from "./interface";


const BASE_URL = ' http://localhost:3001'
const PATH = '/quotes'
/**
 * Fetch quote from server
 */
export const fetchQuotes = async () => {
  const res = await fetch(`${BASE_URL}${PATH}`)
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  }
  return await res.json() as IQuotes[]
}