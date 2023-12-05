import { Address } from '@ton/core'
import { Action, ValueFlow } from '../common'

// Event Schema

export interface PostEmulateEventsDto {
  event_id: string
  timestamp: bigint
  actions: Action[]
  value_flow: ValueFlow[]
  is_scam: boolean
  lt: bigint
  in_progress: boolean
}

export interface AccountAddress {
  address: Address
  name?: string
  is_scam: boolean
  icon?: string
  is_wallet: boolean
}
