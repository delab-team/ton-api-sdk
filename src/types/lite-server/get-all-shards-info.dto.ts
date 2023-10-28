export interface GetAllShardsInfoDto {
  id: Id
  proof: string
  data: string
}

export interface Id {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}
