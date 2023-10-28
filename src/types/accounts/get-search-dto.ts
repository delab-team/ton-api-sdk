export interface GetSearchDto {
  addresses: Address[]
}

export interface Address {
  address: string
  name: string
  preview: string
}
