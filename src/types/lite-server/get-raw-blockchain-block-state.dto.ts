export interface GetRawBlockchainBlockStateDto {
  id: Id
  root_hash: string
  file_hash: string
  data: string
}

export interface Id {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}
