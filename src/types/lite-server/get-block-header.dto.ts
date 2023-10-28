export interface GetBlockHeaderDto {
  id: Id
  mode: number
  header_proof: string
}

export interface Id {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}
