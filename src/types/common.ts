import { Address, Cell } from "@ton/core";

export interface JettonBalance {
  balance: string;
  price: TokenRates;
  wallet_address: AccountAddress;
  jetton: JettonPreview;
}

export interface TokenRates {
  prices: { [key: string]: number };
  diff_24h: { [key: string]: string };
  diff_7d: { [key: string]: string };
  diff_30d: { [key: string]: string };
}

export interface AccountAddress {
  address: Address;
  name?: string;
  is_scam: boolean;
  icon?: string;
  is_wallet: boolean;
}

export interface JettonPreview {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  image: string;
  verification: 'whitelist' | 'blacklist' | 'none';
}

//========================================================================================================================================================

export interface NftItem {
  address: Address
  index: bigint
  owner?: AccountAddress
  collection?: {
    address: Address
    name: string
    description: string
  }
  verified: boolean
  metadata: any
  sale?: Sale
  previews?: ImagePreview[]
  dns?: string
  approved_by: NftApprovedBy
}

export interface Sale {
  address: Address
  market: AccountAddress
  owner?: AccountAddress
  price: Price
}

export interface Price {
  value: string
  token_name: string
}

export interface ImagePreview {
  resolution: string
  url: string
}

export type NftApprovedBy = [ 'getgems' | 'tonkeeper' | 'ton.diamonds' ]

//========================================================================================================================================================

// Subscriptions Schema

export interface Subscription {
  address: Address
  wallet_address: Address
  beneficiary_address: Address
  amount: bigint
  period: bigint
  start_time: bigint
  timeout: bigint
  last_payment_time: bigint
  last_request_time: bigint
  subscription_id: bigint
  failed_attempts: number
}

//========================================================================================================================================================

// AccountEvents Schema

export interface AccountEvent {
  event_id: string
  account: AccountAddress
  timestamp: bigint
  actions: Action
  is_scam: boolean
  lt: bigint
  in_progress: boolean
  extra: bigint
}

export interface Action {
  type:  'TonTransfer'
  | 'JettonTransfer'
  | 'JettonBurn'
  | 'JettonMint'
  | 'NftItemTransfer'
  | 'ContractDeploy'
  | 'Subscribe'
  | 'UnSubscribe'
  | 'AuctionBid'
  | 'NftPurchase'
  | 'DepositStake'
  | 'WithdrawStake'
  | 'WithdrawStakeRequest'
  | 'JettonSwap'
  | 'SmartContractExec'
  | 'ElectionsRecoverStake'
  | 'ElectionsDepositStake'
  | 'DomainRenew'
  | 'Unknown';
  status: 'ok' | 'failed'
  TonTransfer?: TonTransferAction
  ContractDeploy?: ContractDeployAction
  JettonTransfer?: JettonTransferAction
  JettonBurn?: JettonBurnAction
  JettonMint?: JettonMintAction
  NftItemTransfer?: NftItemTransferAction
  Subscribe?: SubscribeAction
  UnSubscribe?: UnSubscribeAction
  AuctionBid?: AuctionBidAction
  NftPurchase?: NftPurchaseAction
  DepositStake?: DepositStakeAction
  WithdrawStake?: WithdrawStakeAction
  WithdrawStakeRequest?: WithdrawStakeRequestAction
  ElectionsDepositStake?: ElectionsDepositStakeAction
  ElectionsRecoverStake?: ElectionsRecoverStakeAction
  JettonSwap?: JettonSwapAction
  SmartContractExec?: SmartContractAction
  DomainRenew?: DomainRenewAction
  simple_preview: ActionSimplePreview
}

export interface TonTransferAction {
  sender: AccountAddress
  recipient: AccountAddress
  amount: bigint
  comment?: string
  encrypted_comment?: EncryptedComment
  refund: Refund
}

export interface EncryptedComment {
  encryption_type: string;
  cipher_text: string;
}

export interface Refund {
  type: 'DNS.ton' | 'DNS.tg' | 'GetGems'
  origin: string
}

export interface ContractDeployAction {
  address: Address
  interfaces: string[]
}

export interface JettonTransferAction {
  sender?: AccountAddress
  recipient?: AccountAddress
  senders_wallet: Address
  recipients_wallet: Address
  amount: bigint
  comment?: string
  encrypted_comment?: EncryptedComment
  refund?: Refund
  jetton: JettonPreview
}

export interface JettonPreview {
  address: Address
  name: string
  symbol: string
  decimals: number
  image: string
  verification: JettonVerificationType
}

export type JettonVerificationType = 'whitelist' | 'blacklist' | 'none'

export interface JettonBurnAction {
  sender: AccountAddress
  senders_wallet: string
  amount: string
  jetton: JettonPreview
}

export interface JettonMintAction {
  recipient: AccountAddress
  recipients_wallet: Address
  amount: string
  jetton: JettonPreview
}

export interface NftItemTransferAction {
  sender?: AccountAddress
  recipient?: AccountAddress
  nft: string
  comment?: string
  encrypted_comment?: EncryptedComment
  payload?: string
  refund?: Refund
}

export interface SubscribeAction {
  subscriber: AccountAddress
  subscription: Address
  beneficiary: AccountAddress
  amount: bigint
  initial: boolean
}

export interface UnSubscribeAction {
  subscriber: AccountAddress
  subscription: Address
  beneficiary: AccountAddress
}

export interface AuctionBidAction {
  auction_type: 'DNS.ton' | 'DNS.tg' | 'NUMBER.tg' | 'getgems'
  amount: Price
  nft?: NftItem
  bidder: AccountAddress
  auction: AccountAddress
}

export interface Price {
  value: string
  token_name: string
}

export interface NftItem {
  address: Address
  index: bigint
  owner?: AccountAddress
  collection?: {
    address: Address
    name: string
    description: string
  }
  verified: boolean
  metadata: any;
  sale?: Sale
  previews?: ImagePreview
  dns?: string
  approved_by: NftApprovedBy
}

export interface Sale {
  address: Address
  market: AccountAddress
  owner?: AccountAddress
  price: Price
}

export interface ImagePreview {
  resolution: string
  url: string
}

export interface NftPurchaseAction {
  auction_type: 'DNS.tg' | 'getgems' | 'basic'
  amount: Price
  nft: NftItem
  seller: AccountAddress
  buyer: AccountAddress
}

export interface DepositStakeAction {
  amount: bigint
  staker: AccountAddress
  pool: AccountAddress
  implementation: PoolImplementationType
}

export type PoolImplementationType = 'whales' | 'tf' | 'liquidTf'

export interface WithdrawStakeAction {
  amount: bigint
  staker: AccountAddress
  pool: AccountAddress
  implementation: PoolImplementationType
}

export interface WithdrawStakeRequestAction {
  amount: bigint
  staker: AccountAddress
  pool: AccountAddress
  implementation: PoolImplementationType
}

export interface ElectionsDepositStakeAction {
  amount: bigint
  staker: AccountAddress
}

export interface ElectionsRecoverStakeAction {
  amount: bigint
  staker: AccountAddress
}

export interface JettonSwapAction {
  dex: 'stonfi' | 'dedust' | 'megatonfi'
  amount_in: string
  amount_out: string
  ton_in?: bigint
  ton_out?: bigint
  user_wallet: AccountAddress
  router: AccountAddress
  jetton_master_in?: JettonPreview
  jetton_master_out?: JettonPreview
}

export interface SmartContractAction {
  executor: AccountAddress
  contract: AccountAddress
  ton_attached?: bigint
  operation: string
  payload?: string
  refund?: Refund
}

export interface DomainRenewAction {
  domain: string
  contract_address: Address
  renewer: AccountAddress
}

export interface ActionSimplePreview {
  name: string
  description: string
  action_image?: string
  value?: string
  value_image?: string
  accounts: AccountAddress[]
}

//========================================================================================================================================================

export interface Bounceable {
  b64: string
  b64url: string
}

export interface NonBounceable {
  b64: string
  b64url: string
}

//========================================================================================================================================================

export interface Item {
  expiring_at: bigint
  name: string
  dns_item?: NftItem
}

//========================================================================================================================================================

export interface TraceID {
  id: string
  utime: number
}

//========================================================================================================================================================

export interface Account {
  address: string;
  balance: number;
  last_activity: number;
  status: string;
  interfaces?: string[][];
  name?: string;
  is_scam?: boolean;
  icon?: string;
  memo_required?: boolean;
  get_methods: string[];
  is_suspended?: boolean;
  is_wallet: boolean;
}

//========================================================================================================================================================

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

//========================================================================================================================================================

export interface Method {
  id: bigint
  method: string
}

//========================================================================================================================================================

export interface Transaction {
  hash: string;
  lt: BigInt;
  account: AccountAddress;
  success: boolean;
  utime: number;
  orig_status: 'nonexist' | 'uninit' | 'active' | 'frozen';
  end_status: 'nonexist' | 'uninit' | 'active' | 'frozen';
  total_fees: BigInt;
  transaction_type: 'TransOrd' | 'TransTickTock' | 'TransSplitPrepare' | 'TransSplitInstall' | 'TransMergePrepare' | 'TransMergeInstall' | 'TransStorage';
  state_update_old: string;
  state_update_new: string;
  in_msg: Message;
  out_msgs?: Message[];
  block: Cell;
  prev_trans_hash?: string;
  prev_trans_lt?: BigInt;
  compute_phase?: ComputePhase;
  storage_phase?: StoragePhase;
  credit_phase?: CreditPhase;
  action_phase?: ActionPhase;
  bounce_phase?: 'TrPhaseBounceNegfunds' | 'TrPhaseBounceNofunds' | 'TrPhaseBounceOk';
  aborted?: boolean;
  destroyed?: boolean;
}

export interface Message {
  created_lt: BigInt;
  ihr_disabled: boolean;
  bounce: boolean;
  bounced: boolean;
  value: BigInt;
  fwd_fee: BigInt;
  ihr_fee: BigInt;
  destination?: AccountAddress;
  source?: AccountAddress;
  import_fee: BigInt;
  created_at: BigInt;
  op_code: string;
  init?: StateInit;
  raw_body?: string;
  decoded_op_name?: string;
  decoded_body?: any;
};

export interface StateInit {
  boc: string;
}

export interface ComputePhase {
  skipped: boolean;
  skip_reason?: 'cskip_no_state' | 'cskip_bad_state' | 'cskip_no_gas';
  success?: boolean;
  gas_fees?: BigInt;
  gas_used?: BigInt;
  vm_steps?: BigInt;
  extit_code?: BigInt;
};

export interface StoragePhase {
  fees_collected: BigInt
  fees_due?: BigInt
  status_change: 'acst_unchanged' | 'acst_frozen' | 'acst_deleted'
}

export interface CreditPhase {
  fees_collected: BigInt
  credit: BigInt
}

export interface ActionPhase {
  success: boolean
  total_actions: number
  skipped_actions: number
  fwd_fees: BigInt
  total_fees: BigInt
}

//========================================================================================================================================================

export type Shard = {
  last_known_block_id: Cell;
}

//========================================================================================================================================================

export interface ConfigProposalSetup {
  min_tot_rounds: number;
  max_tot_rounds: number;
  min_wins: number;
  max_losses: number;
  min_store_sec: BigInt;
  max_store_sec: BigInt;
  bit_price: BigInt;
  cell_price: BigInt;
}


export interface WorkchainDescr {
  workchain: number;
  enabled_since: BigInt;
  actual_min_split: number;
  min_split: number;
  max_split: number;
  basic: number;
  active: boolean;
  accept_msgs: boolean;
  flags: number;
  zerostate_root_hash: string;
  zerostate_file_hash: string;
  version: BigInt;
}

export interface GasLimitPrices {
  special_gas_limit: bigint;
  flat_gas_limit: bigint;
  flat_gas_price: bigint;
  gas_price: bigint;
  gas_limit: bigint;
  gas_credit: bigint;
  block_gas_limit: bigint;
  freeze_due_limit: bigint;
  delete_due_limit: bigint;
}

export interface StoragePrice {
  utime_since: BigInt;
  bit_price_ps: BigInt;
  cell_price_ps: BigInt;
  mc_bit_price_ps: BigInt;
  mc_cell_price_ps: BigInt;
}

export interface BlockLimits {
  bytes: BlockParamLimits;
  gas: BlockParamLimits;
  lt_delta: BlockParamLimits;
}

export interface BlockParamLimits {
  underload: bigint;
  soft_limit: bigint;
  hard_limit: bigint;
}


export interface MsgForwardPrices {
  lump_price: bigint;
  bit_price: bigint;
  cell_price: bigint;
  ihr_price_factor: bigint;
  first_frac: bigint;
  next_frac: bigint;
}

export interface ValidatorsSet {
  utime_since: number;
  utime_until: number;
  total: number;
  main: number;
  total_weight: bigint;
  list: Validator[];
}

export interface Validator {
  public_key: string;
  weight: bigint;
  adnl_addr?: string;
}


export interface MisbehaviourPunishmentConfig {
  default_flat_fine: bigint;
  default_proportional_fine: bigint;
  severity_flat_mult: number;
  severity_proportional_mult: number;
  unpunishable_interval: number;
  long_interval: number;
  long_flat_mult: number;
  long_proportional_mult: number;
  medium_interval: number;
  medium_flat_mult: number;
  medium_proportional_mult: number;
}


export interface SizeLimitsConfig {
  max_msg_bits: bigint;
  max_msg_cells: bigint;
  max_library_cells: bigint;
  max_vm_data_depth: number;
  max_ext_msg_size: bigint;
  max_ext_msg_depth: number;
  max_acc_state_cells?: bigint;
  max_acc_state_bits?: bigint;
}

export interface OracleBridgeParams {
  bridge_addr: string;
  oracle_multisig_address: string;
  external_chain_address: string;
  oracles: Oracle[];
}

export interface Oracle {
  address: Address;
  secp_pubkey: string;
}

export interface JettonBridgeParams {
  bridge_address: string;
  oracles_address: string;
  state_flags: number;
  burn_bridge_fee?: bigint;
  oracles: Oracle[];
  external_chain_address?: string;
  prices?: JettonBridgePrices;
}

export interface JettonBridgePrices {
  bridge_burn_fee: bigint;
  bridge_mint_fee: bigint;
  wallet_min_tons_for_storage: bigint;
  wallet_gas_consumption: bigint;
  minter_min_tons_for_storage: bigint;
  discover_gas_consumption: bigint;
}

//========================================================================================================================================================

export interface Stack {
  type: 'cell' | 'num' | 'nan' | 'null' | 'tuple'
  cell?: string
  slice?: string
  num?: string
  tuple: any[]
}

//========================================================================================================================================================

export interface ValueFlow {
  account: AccountAddress
  ton: bigint
  fees: bigint
  jettons: [{
    account: AccountAddress
    jetton: JettonPreview
    quantity: bigint
  }]
}

//========================================================================================================================================================

export interface Trace {
  transaction: Transaction;
  interfaces: string[];
  children?: any[]
  emulated?: boolean
}

export interface Risk {
  transfer_all_remaining_balance: boolean
  ton: bigint
  jettons: JettonQuantity[]
  nfts: NftItem[]
}

export interface JettonQuantity {
  quantity: string
  wallet_address: AccountAddress
  jetton: JettonPreview
}

//========================================================================================================================================================

export interface AccountEvents {
  events: AccountEvent[]
  next_from: bigint
}

export interface NftCollections {
  nft_collections: NftCollection[]
}

export interface NftCollection {
  address: Address;
  next_item_index: number;
  owner?: AccountAddress;
  raw_collection_content: string;
  metadata?: any;
  previews?: ImagePreview;
  approved_by: NftApprovedBy
}

export interface NftItems {
  nft_items: NftItem[]
}

//========================================================================================================================================================

export interface DomainInfo {
  name: string;
  expiring_at?: bigint;
  item: NftItem
}

//========================================================================================================================================================

export interface DnsRecord {
  wallet?: WalletDns
  next_resolver?: Address
  sits: string[]
  storage?: string
}

export interface WalletDns {
  address: Address
  is_wallet: boolean
  has_method_pubkey: boolean
  has_method_seqno: boolean
  names: string[]
}

//========================================================================================================================================================

export interface DomainBids {
  data: DomainBid[]
}

export interface DomainBid {
  success: boolean
  value: bigint
  txTime: bigint
  txHash: string
  bidder: AccountAddress
}

//========================================================================================================================================================

export interface Auctions {
  data: Auction[]
  total: number;
}

export interface Auction {
  domain: string
  owner: string
  price: bigint
  bids: bigint
  date: bigint
}

//========================================================================================================================================================

export interface Event {
  event_id: string
  timestamp: bigint
  actions: Action[]
  value_flow: ValueFlow[]
  is_scam: boolean
  lt: bigint
  in_progress: boolean
}

//========================================================================================================================================================

export interface Jettons {
  jettons: JettonInfo[]
}

export interface JettonInfo {
  mintable: boolean
  total_supply: string
  metadata: JettonMetadata
  verification: JettonVerificationType
  holders_count: number
}

export interface JettonMetadata {
  address: Address
  name: string
  sybmol: string
  decimals: string
  image?: string
  description?: string
  social?: string[]
  websites?: string[]
  catalogs?: string[]
}

export interface JettonHolders {
  addresses: [{
    address: Address
    owner: AccountAddress
    balance: string
  }]
}

//========================================================================================================================================================

export interface AccountStaking {
  pools: AccountStakingInfo[]
}

export interface AccountStakingInfo {
  pool: string
  amount: bigint
  pending_deposit: bigint
  pending_withdraw: bigint
  ready_withdraw: bigint
}

//========================================================================================================================================================

export interface StakingInfo {
  amount: bigint
  staker: AccountAddress
  pool: AccountAddress
  implementation: PoolImplementationType
}

//========================================================================================================================================================

export interface ApyHistory {
  apy: number;
  time: number;
}

//========================================================================================================================================================

export interface Accounts {
  accounts: Account[]
}

//========================================================================================================================================================

export interface Seqno {
  seqno: bigint
}