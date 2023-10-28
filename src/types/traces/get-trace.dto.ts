export interface GetTraceDto {
  transaction: Transaction
  interfaces: string[]
  children: string[]
  emulated: boolean
}

export interface Transaction {
  hash: string
  lt: number
  account: Account
  success: boolean
  utime: number
  orig_status: string
  end_status: string
  total_fees: number
  transaction_type: string
  state_update_old: string
  state_update_new: string
  in_msg: InMsg
  out_msgs: OutMsg[]
  block: string
  prev_trans_hash: string
  prev_trans_lt: number
  compute_phase: ComputePhase
  storage_phase: StoragePhase
  credit_phase: CreditPhase
  action_phase: ActionPhase
  bounce_phase: string
  aborted: boolean
  destroyed: boolean
}

export interface Account {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface InMsg {
  created_lt: number
  ihr_disabled: boolean
  bounce: boolean
  bounced: boolean
  value: number
  fwd_fee: number
  ihr_fee: number
  destination: Destination
  source: Source
  import_fee: number
  created_at: number
  op_code: string
  init: Init
  raw_body: string
  decoded_op_name: string
  decoded_body: string
}

export interface Destination {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Source {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Init {
  boc: string
}

export interface OutMsg {
  created_lt: number
  ihr_disabled: boolean
  bounce: boolean
  bounced: boolean
  value: number
  fwd_fee: number
  ihr_fee: number
  destination: Destination2
  source: Source2
  import_fee: number
  created_at: number
  op_code: string
  init: Init2
  raw_body: string
  decoded_op_name: string
  decoded_body: string
}

export interface Destination2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Source2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Init2 {
  boc: string
}

export interface ComputePhase {
  skipped: boolean
  skip_reason: string
  success: boolean
  gas_fees: number
  gas_used: number
  vm_steps: number
  exit_code: number
}

export interface StoragePhase {
  fees_collected: number
  fees_due: number
  status_change: string
}

export interface CreditPhase {
  fees_collected: number
  credit: number
}

export interface ActionPhase {
  success: boolean
  total_actions: number
  skipped_actions: number
  fwd_fees: number
  total_fees: number
}
