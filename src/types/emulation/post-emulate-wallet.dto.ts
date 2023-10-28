export interface PostEmulateWallet {
  trace: Trace
  risk: Risk
  event: Event
}

export interface Trace {
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

export interface Risk {
  transfer_all_remaining_balance: boolean
  ton: number
  jettons: Jetton[]
  nfts: Nft[]
}

export interface Jetton {
  quantity: string
  wallet_address: WalletAddress
  jetton: Jetton2
}

export interface WalletAddress {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Jetton2 {
  address: string
  name: string
  symbol: string
  decimals: number
  image: string
  verification: string
}

export interface Nft {
  address: string
  index: number
  owner: Owner
  collection: Collection
  verified: boolean
  metadata: Metadata
  sale: Sale
  previews: Preview[]
  dns: string
  approved_by: string[]
}

export interface Owner {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Collection {
  address: string
  name: string
  description: string
}

export interface Metadata {}

export interface Sale {
  address: string
  market: Market
  owner: Owner2
  price: Price
}

export interface Market {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Owner2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Price {
  value: string
  token_name: string
}

export interface Preview {
  resolution: string
  url: string
}

export interface Event {
  event_id: string
  account: Account2
  timestamp: number
  actions: Action[]
  is_scam: boolean
  lt: number
  in_progress: boolean
  extra: number
}

export interface Account2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Action {
  type: string
  status: string
  TonTransfer: TonTransfer
  ContractDeploy: ContractDeploy
  JettonTransfer: JettonTransfer
  JettonBurn: JettonBurn
  JettonMint: JettonMint
  NftItemTransfer: NftItemTransfer
  Subscribe: Subscribe
  UnSubscribe: UnSubscribe
  AuctionBid: AuctionBid
  NftPurchase: NftPurchase
  DepositStake: DepositStake
  WithdrawStake: WithdrawStake
  WithdrawStakeRequest: WithdrawStakeRequest
  ElectionsDepositStake: ElectionsDepositStake
  ElectionsRecoverStake: ElectionsRecoverStake
  JettonSwap: JettonSwap
  SmartContractExec: SmartContractExec
  simple_preview: SimplePreview
}

export interface TonTransfer {
  sender: Sender
  recipient: Recipient
  amount: number
  comment: string
  encrypted_comment: EncryptedComment
  refund: Refund
}

export interface Sender {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Recipient {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface EncryptedComment {
  encryption_type: string
  cipher_text: string
}

export interface Refund {
  type: string
  origin: string
}

export interface ContractDeploy {
  address: string
  interfaces: string[]
}

export interface JettonTransfer {
  sender: Sender2
  recipient: Recipient2
  senders_wallet: string
  recipients_wallet: string
  amount: string
  comment: string
  encrypted_comment: EncryptedComment2
  refund: Refund2
  jetton: Jetton3
}

export interface Sender2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Recipient2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface EncryptedComment2 {
  encryption_type: string
  cipher_text: string
}

export interface Refund2 {
  type: string
  origin: string
}

export interface Jetton3 {
  address: string
  name: string
  symbol: string
  decimals: number
  image: string
  verification: string
}

export interface JettonBurn {
  sender: Sender3
  senders_wallet: string
  amount: string
  jetton: Jetton4
}

export interface Sender3 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Jetton4 {
  address: string
  name: string
  symbol: string
  decimals: number
  image: string
  verification: string
}

export interface JettonMint {
  recipient: Recipient3
  recipients_wallet: string
  amount: string
  jetton: Jetton5
}

export interface Recipient3 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Jetton5 {
  address: string
  name: string
  symbol: string
  decimals: number
  image: string
  verification: string
}

export interface NftItemTransfer {
  sender: Sender4
  recipient: Recipient4
  nft: string
  comment: string
  encrypted_comment: EncryptedComment3
  payload: string
  refund: Refund3
}

export interface Sender4 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Recipient4 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface EncryptedComment3 {
  encryption_type: string
  cipher_text: string
}

export interface Refund3 {
  type: string
  origin: string
}

export interface Subscribe {
  subscriber: Subscriber
  subscription: string
  beneficiary: Beneficiary
  amount: number
  initial: boolean
}

export interface Subscriber {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Beneficiary {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface UnSubscribe {
  subscriber: Subscriber2
  subscription: string
  beneficiary: Beneficiary2
}

export interface Subscriber2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Beneficiary2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface AuctionBid {
  auction_type: string
  amount: Amount
  nft: Nft2
  bidder: Bidder
  auction: Auction
}

export interface Amount {
  value: string
  token_name: string
}

export interface Nft2 {
  address: string
  index: number
  owner: Owner3
  collection: Collection2
  verified: boolean
  metadata: Metadata2
  sale: Sale2
  previews: Preview2[]
  dns: string
  approved_by: string[]
}

export interface Owner3 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Collection2 {
  address: string
  name: string
  description: string
}

export interface Metadata2 {}

export interface Sale2 {
  address: string
  market: Market2
  owner: Owner4
  price: Price2
}

export interface Market2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Owner4 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Price2 {
  value: string
  token_name: string
}

export interface Preview2 {
  resolution: string
  url: string
}

export interface Bidder {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Auction {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface NftPurchase {
  auction_type: string
  amount: Amount2
  nft: Nft3
  seller: Seller
  buyer: Buyer
}

export interface Amount2 {
  value: string
  token_name: string
}

export interface Nft3 {
  address: string
  index: number
  owner: Owner5
  collection: Collection3
  verified: boolean
  metadata: Metadata3
  sale: Sale3
  previews: Preview3[]
  dns: string
  approved_by: string[]
}

export interface Owner5 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Collection3 {
  address: string
  name: string
  description: string
}

export interface Metadata3 {}

export interface Sale3 {
  address: string
  market: Market3
  owner: Owner6
  price: Price3
}

export interface Market3 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Owner6 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Price3 {
  value: string
  token_name: string
}

export interface Preview3 {
  resolution: string
  url: string
}

export interface Seller {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Buyer {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface DepositStake {
  amount: number
  staker: Staker
  pool: Pool
  implementation: string
}

export interface Staker {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Pool {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface WithdrawStake {
  amount: number
  staker: Staker2
  pool: Pool2
  implementation: string
}

export interface Staker2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Pool2 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface WithdrawStakeRequest {
  amount: number
  staker: Staker3
  pool: Pool3
  implementation: string
}

export interface Staker3 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Pool3 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface ElectionsDepositStake {
  amount: number
  staker: Staker4
}

export interface Staker4 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface ElectionsRecoverStake {
  amount: number
  staker: Staker5
}

export interface Staker5 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface JettonSwap {
  dex: string
  amount_in: string
  amount_out: string
  ton_in: number
  ton_out: number
  user_wallet: UserWallet
  router: Router
  jetton_master_in: JettonMasterIn
  jetton_master_out: JettonMasterOut
}

export interface UserWallet {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Router {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface JettonMasterIn {
  address: string
  name: string
  symbol: string
  decimals: number
  image: string
  verification: string
}

export interface JettonMasterOut {
  address: string
  name: string
  symbol: string
  decimals: number
  image: string
  verification: string
}

export interface SmartContractExec {
  executor: Executor
  contract: Contract
  ton_attached: number
  operation: string
  payload: string
  refund: Refund4
}

export interface Executor {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Contract {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}

export interface Refund4 {
  type: string
  origin: string
}

export interface SimplePreview {
  name: string
  description: string
  action_image: string
  value: string
  value_image: string
  accounts: Account3[]
}

export interface Account3 {
  address: string
  name: string
  is_scam: boolean
  icon: string
  is_wallet: boolean
}
