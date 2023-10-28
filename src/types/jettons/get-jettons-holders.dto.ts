export interface GetJettonsHoldersDto {
  addresses: Address[]
}

export interface Address {
  address: string
  owner: Owner
  balance: string
}

export interface Owner {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}
