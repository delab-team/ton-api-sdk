import { Address } from '@ton/core'

// FoundAccounts
export interface GetSearchDto {
  addresses: {
    address: Address
    name: string
    preview: string
  }[]
}
