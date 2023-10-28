

// GetTransactionsMessageDataType

export interface GetTransactionsMessageDataType {
  hash: string
  lt: number
  account: AccountTransactionsMessage
  success: boolean
  utime: number
  orig_status: string
  end_status: string
  total_fees: number
  transaction_type: string
  state_update_old: string
  state_update_new: string
  in_msg: InMsgTransactionsMessage
  out_msgs: OutMsgTransactionsMessage[]
  block: string
  prev_trans_hash: string
  prev_trans_lt: number
  compute_phase: ComputePhaseTransactionsMessage
  storage_phase: StoragePhaseTransactionsMessage
  credit_phase: CreditPhaseTransactionsMessage
  action_phase: ActionPhaseTransactionsMessage
  bounce_phase: string
  aborted: boolean
  destroyed: boolean
}

export interface AccountTransactionsMessage {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface InMsgTransactionsMessage {
  created_lt: number
  ihr_disabled: boolean
  bounce: boolean
  bounced: boolean
  value: number
  fwd_fee: number
  ihr_fee: number
  destination: DestinationTransactionsMessage
  source: SourceTransactionsMessage
  import_fee: number
  created_at: number
  op_code: string
  init: InitTransactionsMessage
  raw_body: string
  decoded_op_name: string
  decoded_body: string
}

export interface DestinationTransactionsMessage {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface SourceTransactionsMessage {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface InitTransactionsMessage {
  boc: string
}

export interface OutMsgTransactionsMessage {
  created_lt: number
  ihr_disabled: boolean
  bounce: boolean
  bounced: boolean
  value: number
  fwd_fee: number
  ihr_fee: number
  destination: Destination2TransactionsMessage
  source: Source2TransactionsMessage
  import_fee: number
  created_at: number
  op_code: string
  init: Init2TransactionsMessage
  raw_body: string
  decoded_op_name: string
  decoded_body: string
}

export interface Destination2TransactionsMessage {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Source2TransactionsMessage {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Init2TransactionsMessage {
  boc: string
}

export interface ComputePhaseTransactionsMessage {
  skipped: boolean
  skip_reason: string
  success: boolean
  gas_fees: number
  gas_used: number
  vm_steps: number
  exit_code: number
}

export interface StoragePhaseTransactionsMessage {
  fees_collected: number
  fees_due: number
  status_change: string
}

export interface CreditPhaseTransactionsMessage {
  fees_collected: number
  credit: number
}

export interface ActionPhaseTransactionsMessage {
  success: boolean
  total_actions: number
  skipped_actions: number
  fwd_fees: number
  total_fees: number
}
