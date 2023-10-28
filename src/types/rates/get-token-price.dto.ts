export interface GetTokenPriceDto {
  rates: Rates
}

export interface Rates {
  additionalProp1: AdditionalProp1
  additionalProp2: AdditionalProp2
  additionalProp3: AdditionalProp3
}

export interface AdditionalProp1 {
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

export interface AdditionalProp2 {
  prices: Prices2
  diff_24h: Diff24h2
  diff_7d: Diff7d2
  diff_30d: Diff30d2
}

export interface Prices2 {
  TON: number
}

export interface Diff24h2 {
  TON: string
}

export interface Diff7d2 {
  TON: string
}

export interface Diff30d2 {
  TON: string
}

export interface AdditionalProp3 {
  prices: Prices3
  diff_24h: Diff24h3
  diff_7d: Diff7d3
  diff_30d: Diff30d3
}

export interface Prices3 {
  TON: number
}

export interface Diff24h3 {
  TON: string
}

export interface Diff7d3 {
  TON: string
}

export interface Diff30d3 {
  TON: string
}
