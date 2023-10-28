export interface GetListDto {
  jettons: Jetton[]
}

export interface Jetton {
  mintable: boolean
  total_supply: string
  metadata: Metadata
  verification: string
  holders_count: number
}

export interface Metadata {
  address: string
  name: string
  symbol: string
  decimals: string
  image: string
  description: string
  social: string[][]
  websites: string[][]
  catalogs: string[][]
}
