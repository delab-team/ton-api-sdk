export interface GetBlockchainConfigType {
  "0": string
  "1": string
  "2": string
  "3": string
  "4": string
  "5": N5
  "6": N6
  "7": N7
  "8": N8
  "9": N9
  "10": N10
  "11": N11
  "12": N12
  "13": N13
  "14": N14
  "15": N15
  "16": N16
  "17": N17
  "18": N18
  "20": N20
  "21": N21
  "22": N22
  "23": N23
  "24": N24
  "25": N25
  "28": N28
  "29": N29
  "31": N31
  "32": N32
  "33": N33
  "34": N34
  "35": N35
  "36": N36
  "37": N37
  "40": N40
  "43": N43
  "44": N44
  "71": N71
  "72": N72
  "73": N73
  "79": N79
  "81": N81
  "82": N82
  raw: string
}

export interface N5 {
  blackhole_addr: string
  fee_burn_nom: number
  fee_burn_denom: number
}

export interface N6 {
  mint_new_price: number
  mint_add_price: number
}

export interface N7 {
  currencies: Currency[]
}

export interface Currency {
  currency_id: number
  amount: string
}

export interface N8 {
  version: number
  capabilities: number
}

export interface N9 {
  mandatory_params: number[]
}

export interface N10 {
  critical_params: number[]
}

export interface N11 {
  normal_params: NormalParams
  critical_params: CriticalParams
}

export interface NormalParams {
  min_tot_rounds: number
  max_tot_rounds: number
  min_wins: number
  max_losses: number
  min_store_sec: number
  max_store_sec: number
  bit_price: number
  cell_price: number
}

export interface CriticalParams {
  min_tot_rounds: number
  max_tot_rounds: number
  min_wins: number
  max_losses: number
  min_store_sec: number
  max_store_sec: number
  bit_price: number
  cell_price: number
}

export interface N12 {
  workchains: Workchain[]
}

export interface Workchain {
  workchain: number
  enabled_since: number
  actual_min_split: number
  min_split: number
  max_split: number
  basic: number
  active: boolean
  accept_msgs: boolean
  flags: number
  zerostate_root_hash: string
  zerostate_file_hash: string
  version: number
}

export interface N13 {
  deposit: number
  bit_price: number
  cell_price: number
}

export interface N14 {
  masterchain_block_fee: number
  basechain_block_fee: number
}

export interface N15 {
  validators_elected_for: number
  elections_start_before: number
  elections_end_before: number
  stake_held_for: number
}

export interface N16 {
  max_validators: number
  max_main_validators: number
  min_validators: number
}

export interface N17 {
  min_stake: string
  max_stake: string
  min_total_stake: string
  max_stake_factor: number
}

export interface N18 {
  storage_prices: StoragePrice[]
}

export interface StoragePrice {
  utime_since: number
  bit_price_ps: number
  cell_price_ps: number
  mc_bit_price_ps: number
  mc_cell_price_ps: number
}

export interface N20 {
  gas_limits_prices: GasLimitsPrices
}

export interface GasLimitsPrices {
  special_gas_limit: number
  flat_gas_limit: number
  flat_gas_price: number
  gas_price: number
  gas_limit: number
  gas_credit: number
  block_gas_limit: number
  freeze_due_limit: number
  delete_due_limit: number
}

export interface N21 {
  gas_limits_prices: GasLimitsPrices2
}

export interface GasLimitsPrices2 {
  special_gas_limit: number
  flat_gas_limit: number
  flat_gas_price: number
  gas_price: number
  gas_limit: number
  gas_credit: number
  block_gas_limit: number
  freeze_due_limit: number
  delete_due_limit: number
}

export interface N22 {
  block_limits: BlockLimits
}

export interface BlockLimits {
  bytes: Bytes
  gas: Gas
  lt_delta: LtDelta
}

export interface Bytes {
  underload: number
  soft_limit: number
  hard_limit: number
}

export interface Gas {
  underload: number
  soft_limit: number
  hard_limit: number
}

export interface LtDelta {
  underload: number
  soft_limit: number
  hard_limit: number
}

export interface N23 {
  block_limits: BlockLimits2
}

export interface BlockLimits2 {
  bytes: Bytes2
  gas: Gas2
  lt_delta: LtDelta2
}

export interface Bytes2 {
  underload: number
  soft_limit: number
  hard_limit: number
}

export interface Gas2 {
  underload: number
  soft_limit: number
  hard_limit: number
}

export interface LtDelta2 {
  underload: number
  soft_limit: number
  hard_limit: number
}

export interface N24 {
  msg_forward_prices: MsgForwardPrices
}

export interface MsgForwardPrices {
  lump_price: number
  bit_price: number
  cell_price: number
  ihr_price_factor: number
  first_frac: number
  next_frac: number
}

export interface N25 {
  msg_forward_prices: MsgForwardPrices2
}

export interface MsgForwardPrices2 {
  lump_price: number
  bit_price: number
  cell_price: number
  ihr_price_factor: number
  first_frac: number
  next_frac: number
}

export interface N28 {
  mc_catchain_lifetime: number
  shard_catchain_lifetime: number
  shard_validators_lifetime: number
  shard_validators_num: number
  flags: number
  shuffle_mc_validators: boolean
}

export interface N29 {
  flags: number
  new_catchain_ids: boolean
  round_candidates: number
  next_candidate_delay_ms: number
  consensus_timeout_ms: number
  fast_attempts: number
  attempt_duration: number
  catchain_max_deps: number
  max_block_bytes: number
  max_collated_bytes: number
  proto_version: number
  catchain_max_blocks_coeff: number
}

export interface N31 {
  fundamental_smc_addr: string[]
}

export interface N32 {
  utime_since: number
  utime_until: number
  total: number
  main: number
  total_weight: number
  list: List[]
}

export interface List {
  public_key: string
  weight: number
  adnl_addr: string
}

export interface N33 {
  utime_since: number
  utime_until: number
  total: number
  main: number
  total_weight: number
  list: List2[]
}

export interface List2 {
  public_key: string
  weight: number
  adnl_addr: string
}

export interface N34 {
  utime_since: number
  utime_until: number
  total: number
  main: number
  total_weight: number
  list: List3[]
}

export interface List3 {
  public_key: string
  weight: number
  adnl_addr: string
}

export interface N35 {
  utime_since: number
  utime_until: number
  total: number
  main: number
  total_weight: number
  list: List4[]
}

export interface List4 {
  public_key: string
  weight: number
  adnl_addr: string
}

export interface N36 {
  utime_since: number
  utime_until: number
  total: number
  main: number
  total_weight: number
  list: List5[]
}

export interface List5 {
  public_key: string
  weight: number
  adnl_addr: string
}

export interface N37 {
  utime_since: number
  utime_until: number
  total: number
  main: number
  total_weight: number
  list: List6[]
}

export interface List6 {
  public_key: string
  weight: number
  adnl_addr: string
}

export interface N40 {
  misbehaviour_punishment_config: MisbehaviourPunishmentConfig
}

export interface MisbehaviourPunishmentConfig {
  default_flat_fine: number
  default_proportional_fine: number
  severity_flat_mult: number
  severity_proportional_mult: number
  unpunishable_interval: number
  long_interval: number
  long_flat_mult: number
  long_proportional_mult: number
  medium_interval: number
  medium_flat_mult: number
  medium_proportional_mult: number
}

export interface N43 {
  size_limits_config: SizeLimitsConfig
}

export interface SizeLimitsConfig {
  max_msg_bits: number
  max_msg_cells: number
  max_library_cells: number
  max_vm_data_depth: number
  max_ext_msg_size: number
  max_ext_msg_depth: number
  max_acc_state_cells: number
  max_acc_state_bits: number
}

export interface N44 {
  accounts: string[]
  suspended_until: number
}

export interface N71 {
  oracle_bridge_params: OracleBridgeParams
}

export interface OracleBridgeParams {
  bridge_addr: string
  oracle_multisig_address: string
  external_chain_address: string
  oracles: Oracle[]
}

export interface Oracle {
  address: string
  secp_pubkey: string
}

export interface N72 {
  oracle_bridge_params: OracleBridgeParams2
}

export interface OracleBridgeParams2 {
  bridge_addr: string
  oracle_multisig_address: string
  external_chain_address: string
  oracles: Oracle2[]
}

export interface Oracle2 {
  address: string
  secp_pubkey: string
}

export interface N73 {
  oracle_bridge_params: OracleBridgeParams3
}

export interface OracleBridgeParams3 {
  bridge_addr: string
  oracle_multisig_address: string
  external_chain_address: string
  oracles: Oracle3[]
}

export interface Oracle3 {
  address: string
  secp_pubkey: string
}

export interface N79 {
  jetton_bridge_params: JettonBridgeParams
}

export interface JettonBridgeParams {
  bridge_address: string
  oracles_address: string
  state_flags: number
  burn_bridge_fee: number
  oracles: Oracle4[]
  external_chain_address: string
  prices: Prices
}

export interface Oracle4 {
  address: string
  secp_pubkey: string
}

export interface Prices {
  bridge_burn_fee: number
  bridge_mint_fee: number
  wallet_min_tons_for_storage: number
  wallet_gas_consumption: number
  minter_min_tons_for_storage: number
  discover_gas_consumption: number
}

export interface N81 {
  jetton_bridge_params: JettonBridgeParams2
}

export interface JettonBridgeParams2 {
  bridge_address: string
  oracles_address: string
  state_flags: number
  burn_bridge_fee: number
  oracles: Oracle5[]
  external_chain_address: string
  prices: Prices2
}

export interface Oracle5 {
  address: string
  secp_pubkey: string
}

export interface Prices2 {
  bridge_burn_fee: number
  bridge_mint_fee: number
  wallet_min_tons_for_storage: number
  wallet_gas_consumption: number
  minter_min_tons_for_storage: number
  discover_gas_consumption: number
}

export interface N82 {
  jetton_bridge_params: JettonBridgeParams3
}

export interface JettonBridgeParams3 {
  bridge_address: string
  oracles_address: string
  state_flags: number
  burn_bridge_fee: number
  oracles: Oracle6[]
  external_chain_address: string
  prices: Prices3
}

export interface Oracle6 {
  address: string
  secp_pubkey: string
}

export interface Prices3 {
  bridge_burn_fee: number
  bridge_mint_fee: number
  wallet_min_tons_for_storage: number
  wallet_gas_consumption: number
  minter_min_tons_for_storage: number
  discover_gas_consumption: number
}
