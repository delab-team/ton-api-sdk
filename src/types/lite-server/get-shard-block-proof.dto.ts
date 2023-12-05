export interface GetShardBlockProof {
  masterchain_id: Id
  links: Link[]
}

export interface Link {
  id: Id
  proof: string
}

export interface Id {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}
