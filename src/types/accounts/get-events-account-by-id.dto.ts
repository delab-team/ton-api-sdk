import { AccountEvent } from "../common"

// AccountEvents Schema

export interface GetEventsAccountByIdDto {
 events: AccountEvent[]
 next_from: bigint
}
