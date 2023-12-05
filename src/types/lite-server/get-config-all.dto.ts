export interface GetConfigAllDto {
  mode: number
  id: Id
  state_proof: string
  config_proof: string
}

export interface Id {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}
