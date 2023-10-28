
// GetTransactionsDataType

export interface GetTransactionsDataType {
  hash: string
  lt: number
  account: AccountTransactions
  success: boolean
  utime: number
  orig_status: string
  end_status: string
  total_fees: number
  transaction_type: string
  state_update_old: string
  state_update_new: string
  in_msg: InMsgTransactions
  out_msgs: OutMsgTransactions[]
  block: string
  prev_trans_hash: string
  prev_trans_lt: number
  compute_phase: ComputePhaseTransactions
  storage_phase: StoragePhaseTransactions
  credit_phase: CreditPhaseTransactions
  action_phase: ActionPhaseTransactions
  bounce_phase: string
  aborted: boolean
  destroyed: boolean
}

export interface AccountTransactions {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface InMsgTransactions {
  created_lt: number
  ihr_disabled: boolean
  bounce: boolean
  bounced: boolean
  value: number
  fwd_fee: number
  ihr_fee: number
  destination: DestinationTransactions
  source: SourceTransactions
  import_fee: number
  created_at: number
  op_code: string
  init: InitTransactions
  raw_body: string
  decoded_op_name: string
  decoded_body: string
}

export interface DestinationTransactions {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface SourceTransactions {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface InitTransactions {
  boc: string
}

export interface OutMsgTransactions {
  created_lt: number
  ihr_disabled: boolean
  bounce: boolean
  bounced: boolean
  value: number
  fwd_fee: number
  ihr_fee: number
  destination: Destination2Transactions
  source: Source2Transactions
  import_fee: number
  created_at: number
  op_code: string
  init: Init2Transactions
  raw_body: string
  decoded_op_name: string
  decoded_body: string
}

export interface Destination2Transactions {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Source2Transactions {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Init2Transactions {
  boc: string
}

export interface ComputePhaseTransactions {
  skipped: boolean
  skip_reason: string
  success: boolean
  gas_fees: number
  gas_used: number
  vm_steps: number
  exit_code: number
}

export interface StoragePhaseTransactions {
  fees_collected: number
  fees_due: number
  status_change: string
}

export interface CreditPhaseTransactions {
  fees_collected: number
  credit: number
}

export interface ActionPhaseTransactions {
  success: boolean
  total_actions: number
  skipped_actions: number
  fwd_fees: number
  total_fees: number
}
