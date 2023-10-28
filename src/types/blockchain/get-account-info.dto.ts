
// GetAccountInfoType

export interface GetAccountInfoType {
  address: string
  balance: number
  extra_balance: ExtraBalanceAccountInfo
  code: string
  data: string
  last_transaction_lt: number
  status: string
  storage: Storage
}

export interface ExtraBalanceAccountInfo {
  additionalProp1: string
  additionalProp2: string
  additionalProp3: string
}

export interface StorageAccountInfo {
  used_cells: number
  used_bits: number
  used_public_cells: number
  last_paid: number
  due_payment: number
}