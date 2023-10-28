
// GetTransactions
export interface GetTransactionsType {
  transactions: Transaction[]
}

export interface Transaction {
  hash: string
  lt: number
  account: AccountTransaction
  success: boolean
  utime: number
  orig_status: string
  end_status: string
  total_fees: number
  transaction_type: string
  state_update_old: string
  state_update_new: string
  in_msg: InMsgTransaction
  out_msgs: OutMsgTransaction[]
  block: string
  prev_trans_hash: string
  prev_trans_lt: number
  compute_phase: ComputePhaseTransaction
  storage_phase: StoragePhaseTransaction
  credit_phase: CreditPhaseTransaction
  action_phase: ActionPhaseTransaction
  bounce_phase: string
  aborted: boolean
  destroyed: boolean
}

export interface AccountTransaction {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface InMsgTransaction {
  created_lt: number
  ihr_disabled: boolean
  bounce: boolean
  bounced: boolean
  value: number
  fwd_fee: number
  ihr_fee: number
  destination: DestinationTransaction
  source: SourceTransaction
  import_fee: number
  created_at: number
  op_code: string
  init: InitTransaction
  raw_body: string
  decoded_op_name: string
  decoded_body: string
}

export interface DestinationTransaction {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface SourceTransaction {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface InitTransaction {
  boc: string
}

export interface OutMsgTransaction {
  created_lt: number
  ihr_disabled: boolean
  bounce: boolean
  bounced: boolean
  value: number
  fwd_fee: number
  ihr_fee: number
  destination: Destination2Transaction
  source: Source2Transaction
  import_fee: number
  created_at: number
  op_code: string
  init: Init2Transaction
  raw_body: string
  decoded_op_name: string
  decoded_body: string
}

export interface Destination2Transaction {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Source2Transaction {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Init2Transaction {
  boc: string
}

export interface ComputePhaseTransaction {
  skipped: boolean
  skip_reason: string
  success: boolean
  gas_fees: number
  gas_used: number
  vm_steps: number
  exit_code: number
}

export interface StoragePhaseTransaction {
  fees_collected: number
  fees_due: number
  status_change: string
}

export interface CreditPhaseTransaction {
  fees_collected: number
  credit: number
}

export interface ActionPhaseTransaction {
  success: boolean
  total_actions: number
  skipped_actions: number
  fwd_fees: number
  total_fees: number
}