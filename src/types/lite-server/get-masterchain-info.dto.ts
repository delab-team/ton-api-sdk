export interface GetMasterchainInfoDto {
  last: Last
  state_root_hash: string
  init: Init
}

export interface Last {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}

export interface Init {
  workchain: bigint
  root_hash: string
  file_hash: string
}
