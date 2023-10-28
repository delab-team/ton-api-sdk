export interface GetBlockProofDto {
  complete: boolean
  from: From
  to: To
  steps: Step[]
}

export interface From {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface To {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface Step {
  lite_server_block_link_back: LiteServerBlockLinkBack
  lite_server_block_link_forward: LiteServerBlockLinkForward
}

export interface LiteServerBlockLinkBack {
  to_key_block: boolean
  from: From2
  to: To2
  dest_proof: string
  proof: string
  state_proof: string
}

export interface From2 {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface To2 {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface LiteServerBlockLinkForward {
  to_key_block: boolean
  from: From3
  to: To3
  dest_proof: string
  config_proof: string
  signatures: Signatures
}

export interface From3 {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface To3 {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}

export interface Signatures {
  validator_set_hash: number
  catchain_seqno: number
  signatures: Signature[]
}

export interface Signature {
  node_id_short: string
  signature: string
}
