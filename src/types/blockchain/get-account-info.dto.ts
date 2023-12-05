import { ExtraBalanceAccountInfo } from "../common"

// GetAccountInfoType
export interface GetAccountInfoType {
  address: string
  balance: number
  extra_balance: ExtraBalanceAccountInfo
  code: string
  data: string
  last_transaction_lt: number
  status: string
  storage: string
}
