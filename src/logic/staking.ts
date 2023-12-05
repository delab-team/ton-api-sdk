import { TonApi } from "./ton-api";

import { AccountStaking, ApyHistory, StakingInfo } from "../types/common";

export class Staking {
  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getAllPools (account_id: string): Promise<AccountStaking | undefined> {
    const data = await this.tonApi.get(`staking/nominator/${account_id}/pools`, {})

    console.log(data)
    return data
  }

  async getStakingPoolInfo (account_id: string, accept_language?: string): Promise<StakingInfo | undefined> {
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }

    const data = await this.tonApi.get(`staking/pool/${account_id}`, {}, headers)

    console.log(data)
    return data
  } 

  async getPoolHistory (account_id: string): Promise<ApyHistory | undefined> {
    const data = await this.tonApi.get(`staking/pool/${account_id}/history`, {})

    console.log(data)
    return data
  }

  async getAllPoolsAvailable(
    available_for?: string,
    include_unverified?: boolean,
    accept_language?: string
  ): Promise<AccountStaking | undefined> {
    const data: { available_for?: string; include_unverified?: boolean } = {};

    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }
  
    if (available_for !== undefined) {
      data.available_for = available_for;
    }
  
    if (include_unverified !== undefined) {
      data.include_unverified = include_unverified;
    }
  
    const result = await this.tonApi.get(
      `staking/pools`,
      data,
      headers
    );
  
    console.log(result);
    return result;
  }
}