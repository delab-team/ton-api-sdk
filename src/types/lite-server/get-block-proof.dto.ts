export interface GetBlockProofDto {
  complete: boolean
  from: Block
  to: Block
  steps: Step[]
}

export interface Block {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}

export interface LiteServerBlockLink {
  to_key_block: boolean
  from: Block
  to: Block
}

export interface Step {
  lite_server_block_link_back: LiteServerBlockLink & {
    dest_proof: string
    proof: string
    state_proof: string
  }
  lite_server_block_link_forward: LiteServerBlockLink & {
    dest_proof: string
    config_proof: string
    signatures: Signatures
  }
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
