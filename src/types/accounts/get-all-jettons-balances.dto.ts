// GetAllJettonsBalancesDto
export interface GetAllJettonsBalancesDto {
  balances: Balance[]
}

export interface Balance {
  balance: string
  price: Price
  wallet_address: WalletAddress
  jetton: Jetton
}

export interface Price {
  prices: Prices
  diff_24h: Diff24h
  diff_7d: Diff7d
  diff_30d: Diff30d
}

export interface Prices {
  TON: number
}

export interface Diff24h {
  TON: string
}

export interface Diff7d {
  TON: string
}

export interface Diff30d {
  TON: string
}

export interface WalletAddress {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Jetton {
  address: string
  name: string
  symbol: string
  decimals: number
  image: string
  verification: string
}
