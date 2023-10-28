export interface GetShardBlockProof {
  masterchain_id: MasterchainId
  links: Link[]
}

export interface MasterchainId {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface Link {
  id: Id
  proof: string
}

export interface Id {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}
