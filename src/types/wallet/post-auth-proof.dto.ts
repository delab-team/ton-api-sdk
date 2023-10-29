export interface PostAuthProofDto {
  token: string
}

export interface PostMessageType {
  address: string
  proof: Proof
}

export interface Proof {
  timestamp: number
  domain: Domain
  signature: string
  payload: string
  state_init: string
}

export interface Domain {
  length_bytes: number
  value: string
}
