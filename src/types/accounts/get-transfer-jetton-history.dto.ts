import { AccountEvent } from '../common'

// AccountEvents
export interface GetTransferJettonHistoryDto {
  events: AccountEvent[]
  next_form: BigInt
}
