import { TonApi } from "./ton-api";

import { GetAccountsBalanceChangeDto } from "../types/accounts/get-accounts-balance-change.dto";
import { GetAccountsDomainsDto } from "../types/accounts/get-accounts-domains.dto";
import { GetAllJettonsBalancesDto } from "../types/accounts/get-all-jettons-balances.dto";
import { GetAllNftItemsDto } from "../types/accounts/get-all-nft-items.dto";
import { GetAllSubscriptionsDto } from "../types/accounts/get-all-subscriptions.dto";
import { GetEventsAccountByIdDto } from "../types/accounts/get-events-account-by-id.dto";
import { GetEventsAccountDto } from  "../types/accounts/get-events-account.dto";
import { GetHumanFriendlyInfoDto } from "../types/accounts/get-human-friendly-info.dto";
import { GetPublicKeyDto } from "../types/accounts/get-public-key.dto";
import { GetSearchDto } from "../types/accounts/get-search-dto";
import { GetTonDnsDto } from "../types/accounts/get-ton-dns.dto";
import { GetTracersAccountDto } from "../types/accounts/get-tracers-account.dto";
import { GetTransferJettonHistoryDto } from "../types/accounts/get-transfer-jetton-history.dto";
import { PostBulkDto } from "../types/accounts/post-bulk-dto";
import { GetParseAddressDto } from "../types/accounts/get-parse-address.dto";

import { AccountEvents } from '../types/common';

interface BulkMessageType {
  accounts_ids: string[]
}

export class Accounts {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi
  }

  async getParseAddress (account_id: string): Promise<GetParseAddressDto | undefined> {
    const data = await this.tonApi.get(`address/${account_id}/parse`, {})

    console.log(data)
    return data
  }

  async postBulk (message: BulkMessageType): Promise<PostBulkDto | undefined> {
    const data = await this.tonApi.post('accounts/_bulk', message)

    console.log(data)
    return data
  }

  async getHumanFriendlyInfo (account_id: string): Promise<GetHumanFriendlyInfoDto | undefined> {
    const data = await this.tonApi.get(`accounts/${account_id}`, {})

    console.log(data)
    return data
  }

  async getAccountsDomains (account_id: string): Promise<GetAccountsDomainsDto | undefined> {
    const data = await this.tonApi.get(`accounts/${account_id}/dns/backresolve`, {})

    console.log(data)
    return data
  }

  async getAllJettonsBalances(
    account_id: string,
    currencies?: string
  ): Promise<GetAllJettonsBalancesDto | undefined> {
    const data: { currencies?: string } = {};
  
    if (currencies !== undefined) {
      data.currencies = currencies;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/jettons`,
      data
    );
  
    console.log(result);
    return result;
  }

  async getTransferJettonsHistory(
    account_id: string,
    limit: number,
    accept_language?: string,
    before_it?: BigInt,
    start_date?: BigInt,
    end_date?: BigInt
  ): Promise<AccountEvents | undefined> {
    const data: {
      limit: number;
      before_it?: BigInt;
      start_date?: BigInt;
      end_date?: BigInt;
    } = { limit };
  
    if (before_it !== undefined) {
      data.before_it = before_it;
    }
  
    if (start_date !== undefined) {
      data.start_date = start_date;
    }
  
    if (end_date !== undefined) {
      data.end_date = end_date;
    }

    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/jettons/history`,
      data,
      headers
    );
  
    console.log(result);
    return result;
  }

  async getTransferJettonHistory(
    account_id: string,
    jetton_id: string,
    limit: number,
    accept_language?: string,
    before_it?: bigint,
    start_date?: bigint,
    end_date?: bigint
  ): Promise<GetTransferJettonHistoryDto | undefined> {
    const data: {
      limit: number;
      before_it?: bigint;
      start_date?: bigint;
      end_date?: bigint;
    } = { limit };
  
    if (before_it !== undefined) {
      data.before_it = before_it;
    }
  
    if (start_date !== undefined) {
      data.start_date = start_date;
    }
  
    if (end_date !== undefined) {
      data.end_date = end_date;
    }

    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/jettons/${jetton_id}/history`,
      data,
      headers
    );
  
    console.log(result);
    return result;
  }

  async getAllNftItems(
    account_id: string,
    collection?: string,
    limit?: number,
    offset?: number,
    indirect_ownership?: boolean
  ): Promise<GetAllNftItemsDto | undefined> {
    const data: {
      collection?: string;
      limit?: number;
      offset?: number;
      indirect_ownership?: boolean;
    } = {};
  
    if (collection !== undefined) {
      data.collection = collection;
    }
  
    if (limit !== undefined) {
      data.limit = limit;
    }
  
    if (offset !== undefined) {
      data.offset = offset;
    }
  
    if (indirect_ownership !== undefined) {
      data.indirect_ownership = indirect_ownership;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/nfts`,
      data
    );
  
    console.log(result);
    return result;
  }

  async getEventsAccount(
    account_id: string,
    limit: number,
    accept_language?: string,
    initiator?: boolean,
    subject_only?: boolean,
    before_lt?: bigint,
    start_date?: bigint,
    end_date?: bigint
  ): Promise<GetEventsAccountDto | undefined> {
    const data: {
      limit: number;
      initiator?: boolean;
      subject_only?: boolean;
      before_lt?: bigint;
      start_date?: bigint;
      end_date?: bigint;
    } = { limit };
  
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }

  
    if (initiator !== undefined) {
      data.initiator = initiator;
    }
  
    if (subject_only !== undefined) {
      data.subject_only = subject_only;
    }
  
    if (before_lt !== undefined) {
      data.before_lt = before_lt;
    }
  
    if (start_date !== undefined) {
      data.start_date = start_date;
    }
  
    if (end_date !== undefined) {
      data.end_date = end_date;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/events`,
      data,
      headers
    );
  
    console.log(result);
    return result;
  }

  async getEventsAccountById(
    account_id: string,
    event_id: string,
    accept_language?: string,
    subject_only?: boolean
  ): Promise<GetEventsAccountByIdDto | undefined> {
    const data: {
      subject_only?: boolean;
    } = {};
  
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }
  
    if (subject_only !== undefined) {
      data.subject_only = subject_only;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/events/${event_id}`,
      data,
      headers
    );
  
    console.log(result);
    return result;
  }

  async getTracesAccount(
    account_id: string,
    limit?: number
  ): Promise<GetTracersAccountDto | undefined> {
    const data: { limit?: number } = {};
  
    if (limit !== undefined) {
      data.limit = limit;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/traces`,
      data
    );
  
    console.log(result);
    return result;
  }

  async getAllSubscriptions (account_id: string): Promise<GetAllSubscriptionsDto | undefined> {
    const data = await this.tonApi.get(`accounts/${account_id}/subscriptions`, {})
    
    console.log(data)
    return data
  }

  async postUpdateInternalCache (account_id: string): Promise<any | string> {
    const res = await this.tonApi.post(`accounts/${account_id}/reindex`, {})

    console.log(res)
    return res
  }

  async getSearch (name: string): Promise<GetSearchDto | undefined> {
    const data = await this.tonApi.get(`accounts/search`, { name })

    console.log(data)
    return data
  }

  async getTonDns(
    account_id: string,
    period?: number
  ): Promise<GetTonDnsDto | undefined> {
    const data: { period?: number } = {};
  
    if (period !== undefined) {
      data.period = period;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/dns/expiring`,
      data
    );
  
    console.log(result);
    return result;
  }
  
  async getPublicKey (account_id: string): Promise<GetPublicKeyDto | undefined> {
    const data = await this.tonApi.get(`accounts/${account_id}/publickey`, {})

    console.log(data)
    return data
  }

  async getAccountsBalanceChange (account_id: string, start_date: bigint, end_date: bigint): Promise<GetAccountsBalanceChangeDto | undefined> {
    const data = await this.tonApi.get(`accounts/${account_id}/diff`, { start_date, end_date })

    console.log(data)
    return data
  }
}