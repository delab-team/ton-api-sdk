export interface GetMasterchainInfoDto {
  last: Last
  state_root_hash: string
  init: Init
}

export interface Last {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface Init {
  workchain: number
  root_hash: string
  file_hash: string
}
