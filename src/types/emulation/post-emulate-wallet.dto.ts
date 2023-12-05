import { AccountEvent, Risk, Trace } from "../common";

export interface PostEmulateWalletDto {
  trace: Trace
  risk: Risk
  event: AccountEvent
}
