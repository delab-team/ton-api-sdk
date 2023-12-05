export interface GetShardInfoDto {
  id: Id
  shardblk: Id
  shard_proof: string
  shard_descr: string
}

export interface Id {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}