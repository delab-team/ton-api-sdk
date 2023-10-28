export interface GetDomainBidsDto {
  data: Daum[]
}

export interface Daum {
  success: boolean
  value: number
  txTime: number
  txHash: string
  bidder: Bidder
}

export interface Bidder {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}
