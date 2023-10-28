export interface GetAllPoolsAvailableDto {
  pools: Pool[]
  implementations: Implementations
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

export interface Implementations {
  additionalProp1: AdditionalProp1
  additionalProp2: AdditionalProp2
  additionalProp3: AdditionalProp3
}

export interface AdditionalProp1 {
  name: string
  description: string
  url: string
  socials: string[]
}

export interface AdditionalProp2 {
  name: string
  description: string
  url: string
  socials: string[]
}

export interface AdditionalProp3 {
  name: string
  description: string
  url: string
  socials: string[]
}
