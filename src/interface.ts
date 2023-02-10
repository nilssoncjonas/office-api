/**
 * interface for json quotes
 */
export interface IQuotes {
  id?: number,
  content: string,
  name: string
}

export interface IObject {
  status: string,
  data: Array<IQuotes>
}