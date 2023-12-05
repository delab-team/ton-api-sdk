export interface GetAllShardsInfoDto {
  id: Id
  proof: string
  data: string
}

export interface Id {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}
