export interface GetAccountStateDto {
  id: Id
  shardblk: Id
  shard_proof: string
  proof: string
  state: string
}

export interface Id {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}