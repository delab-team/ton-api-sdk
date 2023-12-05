// Trace Schema

import { Transaction } from "../common"

export interface PostEmulateTracesDto {
  transaction: Transaction
  interfaces: string[]
  children?: any[]
  emulated?: boolean
}
