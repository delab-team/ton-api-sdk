export interface GetShardInfoDto {
  id: Id
  shardblk: Shardblk
  shard_proof: string
  shard_descr: string
}

export interface Id {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface Shardblk {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}
