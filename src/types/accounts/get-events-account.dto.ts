import { AccountEvent } from "../common"

export interface GetEventsAccountDto {
 events: AccountEvent[]
 next_from: bigint
}