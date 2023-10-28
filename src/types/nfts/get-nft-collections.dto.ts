export interface GetNftCollectionsDto {
  nft_collections: NftCollection[]
}

export interface NftCollection {
  address: string
  next_item_index: number
  owner: Owner
  raw_collection_content: string
  metadata: Metadata
  previews: Preview[]
  approved_by: string[]
}

export interface Owner {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Metadata {}

export interface Preview {
  resolution: string
  url: string
}
