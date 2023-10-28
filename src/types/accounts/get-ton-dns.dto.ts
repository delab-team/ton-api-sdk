export interface GetTonDnsDto {
  items: Item[]
}

export interface Item {
  expiring_at: number
  name: string
  dns_item: DnsItem
}

export interface DnsItem {
  address: string
  index: number
  owner: Owner
  collection: Collection
  verified: boolean
  metadata: Metadata
  sale: Sale
  previews: Preview[]
  dns: string
  approved_by: string[]
}

export interface Owner {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Collection {
  address: string
  name: string
  description: string
}

export interface Metadata {}

export interface Sale {
  address: string
  market: Market
  owner: Owner2
  price: Price
}

export interface Market {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Owner2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Price {
  value: string
  token_name: string
}

export interface Preview {
  resolution: string
  url: string
}
