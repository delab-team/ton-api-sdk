import { Address } from "@ton/core";
import { BlockLimits, ConfigProposalSetup, GasLimitPrices, JettonBridgeParams, MisbehaviourPunishmentConfig, MsgForwardPrices, OracleBridgeParams, SizeLimitsConfig, StoragePrice, ValidatorsSet, WorkchainDescr } from "../common";

// BlockchainConfig Schema

export interface GetBlockchainConfigDto {
  0: Address
  1: Address
  2: Address
  3: Address
  4: string
  5: {
    blackhole_addr?: string
    fee_burn_nom: BigInt
    fee_burn_denom: BigInt
  }
  6: {
    // description: Minting fees of new currencies.
    mint_new_price: BigInt
    min_add_price: BigInt
  }
  7: {
    // description: The volume of each of the additional currencies in circulation.
    currencies: Array<{
      currency_id: BigInt;
      amount: string;
    }>;
  }
  8: {
    // description: The network version and additional capabilities supported by the validators.
    version: BigInt
    capabilities: BigInt
  }
  9: {
    // description: List of mandatory parameters of the blockchain config.
    mandatory_params: number[];
  }
  10: {
    // description: List of critical TON parameters, the change of which significantly affects the network, so more voting rounds are held.
    critical_params: number[]
  }
  11: {
    // description: This parameter indicates under what conditions proposals to change the TON configuration
    description?: string;
    normal_params: ConfigProposalSetup;
    critical_params: ConfigProposalSetup;
  }
  12: {
    // description: Workchains in the TON Blockchain
    workchains: WorkchainDescr[];
  }
  13: {
    // description: The cost of filing complaints about incorrect operation of validator
    deposit: BigInt
    bit_price: BigInt
    cell_price: BigInt
  }
  14: {
    // description: The reward in nanoTons for block creation in the TON blockchain.
    masterchain_block_fee: number
    basechain_block_fee: number
  }
  15: {
    // description:	The reward in nanoTons for block creation in the TON blockchain.
    validators_elected_for: BigInt
    elections_start_before: BigInt
    elections_end_before: BigInt
    stake_held_for: BigInt
  }
  16: {
    // description: The limits on the number of validators in the TON blockchain.
    max_validators: number
    max_main_validators: number
    min_validators: number
  }
  17: {
    // description: The stake parameters configuration in the TON blockchain.
    min_stake: string
    max_stake: string
    min_total_stake: string
    max_stake_factor: BigInt
  }
  18: {
    // description: The prices for data storage.
    storage_prices: StoragePrice[]
  }
  20: {
    // description: The cost of computations in the masterchain. The complexity of any computation is estimated in gas units.
    gas_limits_prices: GasLimitPrices
  }
  21: {
    // description: The cost of computations in the masterchain. The complexity of any computation is estimated in gas units.
    gas_limits_prices: GasLimitPrices
  }
  22: {
    // description: The limits on the block in the masterchain, upon reaching which the block is finalized and the callback of the remaining messages (if any) is carried over to the next block.
    block_limits: BlockLimits;
  }
  23: {
    // description: The limits on the block in the basechains, upon reaching which the block is finalized and the callback of the remaining messages (if any) is carried over to the next block.
    block_limits: BlockLimits;
  }
  24: {
    // description: The cost of sending messages in the masterchain of the TON blockchain.
    msg_forward_prices: MsgForwardPrices
  }
  25: {
    // description: The cost of sending messages in the basechains of the TON blockchain.
    msg_forward_prices: MsgForwardPrices
  }
  28: {
    // description: The configuration for the Catchain protocol.
    mc_catchain_lifetime: BigInt;
    shard_catchain_lifetime: BigInt;
    shard_validators_lifetime: BigInt;
    shard_validators_num: BigInt;
    flags?: number;
    shuffle_mc_validators?: boolean;  
  }
  29: {
    // description: The configuration for the consensus protocol above catchain.
    flags?: number;
    new_catchain_ids?: boolean;
    round_candidates: BigInt;
    next_candidate_delay_ms: BigInt;
    consensus_timeout_ms: BigInt;
    fast_attempts: BigInt;
    attempt_duration: BigInt;
    catchain_max_deps: BigInt;
    max_block_bytes: BigInt;
    max_collated_bytes: BigInt;
    proto_version?: BigInt;
    catchain_max_blocks_coeff?: BigInt;
  }
  31: {
    // description: The configuration for the consensus protocol above catchain.
    fundamental_smc_addr: Address[]
  }
  32: ValidatorsSet 
  34: ValidatorsSet
  35: ValidatorsSet
  36: ValidatorsSet
  37: ValidatorsSet
  40: {
    // description: The configuration for punishment for improper behavior (non-validation). In the absence of the parameter, the default fine size is 101 TON
    misbehaviour_punishment_config: MisbehaviourPunishmentConfig
  }
  43: {
    // description: The size limits and some other characteristics of accounts and messages.
    size_limits_config: SizeLimitsConfig
  }
  44: {
    // description: suspended accounts
    accounts: string[];
    suspended_until: number;
  }
  71: {
    // description: Bridge parameters for wrapping TON in other networks.
    oracle_bridge_params: OracleBridgeParams
  }
  72: {
    // description: Bridge parameters for wrapping TON in other networks.
    oracle_bridge_params: OracleBridgeParams
  }
  73: {
    // description: Bridge parameters for wrapping TON in other networks.
    oracle_bridge_params: OracleBridgeParams
  }
  79: {
    // description: Bridge parameters for wrapping tokens from other networks into tokens on the TON network.
    jetton_bridge_params: JettonBridgeParams
  }
  81: {
    // description: Bridge parameters for wrapping tokens from other networks into tokens on the TON network.
    jetton_bridge_params: JettonBridgeParams
  }
  82: {
    // description: Bridge parameters for wrapping tokens from other networks into tokens on the TON network.
    jetton_bridge_params: JettonBridgeParams
  }
  raw: {
    raw: string;
  }
}
