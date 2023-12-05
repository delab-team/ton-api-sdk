// GetValidatorsType

export interface GetValidatorsDto {
  elect_at: BigInt;
  elect_close: BigInt;
  min_stake: BigInt;
  total_stake: BigInt;
  validators: Validator[];
}

export interface Validator {
  address: string;
  adnl_address: string;
  stake: BigInt;
  max_factor: BigInt;
}