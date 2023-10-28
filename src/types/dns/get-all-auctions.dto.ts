export interface GetAllAuctionsDto {
  data: Daum[]
  total: number
}

export interface Daum {
  domain: string
  owner: string
  price: number
  bids: number
  date: number
}
