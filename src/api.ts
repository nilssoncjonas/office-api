import { IQuotes } from "./interface";


const BASE_URL = ' http://localhost:3001'
const PATH = '/quotes'
const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 1000;
/**
 * Fetch quote from server
 */
export const fetchQuotes = async () => {
  const res = await fetch(`${BASE_URL}${PATH}`)

  FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY));

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  }
  return await res.json() as IQuotes[]
}
