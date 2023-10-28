export interface GetDnsResolveForNameDto {
  wallet: Wallet
  next_resolver: string
  sites: string[]
  storage: string
}

export interface Wallet {
  address: string
  is_wallet: boolean
  has_method_pubkey: boolean
  has_method_seqno: boolean
  names: string[]
}
