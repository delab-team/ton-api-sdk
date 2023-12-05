export interface GetMasterchainInfoExtDto {
  capabilities: number;
  init: Init
  last: Last
  last_utime: bigint
  mode: number
  now: bigint
  state_root_hash: string
  version: number
}

interface Init {
  file_hash: string;
  root_hash: string;
  workchain: bigint;
}

interface Last {
  file_hash: string
  root_hash: string
  seqno: bigint
  shard: bigint
  workchain: bigint
}