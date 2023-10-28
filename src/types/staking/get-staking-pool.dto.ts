export interface GetStakingPoolInfo {
  implementation: Implementation
  pool: Pool
}

export interface Implementation {
  name: string
  description: string
  url: string
  socials: string[]
}

export interface Pool {
  address: string
  name: string
  total_amount: number
  implementation: string
  apy: number
  min_stake: number
  cycle_start: number
  cycle_end: number
  verified: boolean
  current_nominators: number
  max_nominators: number
  liquid_jetton_master: string
  nominators_stake: number
  validator_stake: number
  cycle_length: number
}
