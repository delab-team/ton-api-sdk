export interface GetConfigAllDto {
  mode: number
  id: Id
  state_proof: string
  config_proof: string
}

export interface Id {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}
