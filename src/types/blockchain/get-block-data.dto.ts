import { Address, Cell } from "@ton/core"

// BlockchainBlock Schemas
export interface GetBlockDataDto {
  workchain_id: number;
  shard: BigInt;
  seqno: number;
  root_hash: string;
  file_hash: string;
  global_id: number;
  version: number;
  after_merge: boolean;
  before_split: boolean;
  after_split: boolean;
  want_split: boolean;
  want_merge: boolean;
  key_block: boolean;
  gen_utime: number;
  start_lt: BigInt;
  end_lt: BigInt;
  vert_seqno: number;
  gen_catchain_seqno: number;
  min_ref_mc_seqno: number;
  prev_key_block_seqno: number;
  gen_software_version?: number;
  gen_software_capabilities?: BigInt;
  master_ref?: Cell;
  prev_refs: Cell[];
  in_msg_descr_length: BigInt;
  out_msg_descr_length: BigInt;
  rand_seed: string;
  created_by: string;
};
