import { Address } from "@ton/core"

export interface GetStorageProvidersDto {
  providers: StorageProvider[]
}

export interface StorageProvider {
  address: Address
  accept_new_contracts: boolean
  rate_per_mb_day: bigint
  max_span: bigint
  minimal_file_size: bigint
  maximal_file_size: bigint
}
