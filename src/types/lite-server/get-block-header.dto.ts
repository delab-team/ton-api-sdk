export interface GetBlockHeaderDto {
  id: Id
  mode: number
  header_proof: string
}

export interface Id {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}
