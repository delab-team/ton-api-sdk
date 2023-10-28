export interface GetAccountStateDto {
  id: Id
  shardblk: Shardblk
  shard_proof: string
  proof: string
  state: string
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
