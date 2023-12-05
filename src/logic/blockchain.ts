import { TonApi } from "./ton-api"

import { GetAccountInfoType } from "../types/blockchain/get-account-info.dto";
import { GetAccountTransactionsDto } from "../types/blockchain/get-account-transactions.dto";
import { GetBlockDataDto } from "../types/blockchain/get-block-data.dto";
import { GetLastMasterchainDto } from "../types/blockchain/get-last-masterchain.dto";
import { GetMethodAccountDto } from "../types/blockchain/get-method-account.dto";
import { GetRawDto } from "../types/blockchain/get-raw-config.dto";
import { GetTransactionsDto } from "../types/blockchain/get-transactions.dto";
import { GetTransactionsDataDto } from "../types/blockchain/get-transactions-data.dto";
import { GetTransactionsMessageDataDto } from "../types/blockchain/get-transactions-message-data.dto";
import { GetValidatorsDto } from "../types/blockchain/get-validators.dto";
import { GetBlockchainConfigDto } from "../types/blockchain/get-blockchain-config.dto";
import { GetRawBlockchainConfigDto } from "../types/blockchain/get-raw-blockhain-config.dto";
import { GetAccountInspectDto } from "../types/blockchain/get-account-inspect.dto";
import { GetBlockShardsDto } from "../types/blockchain/get-block-shards.dto";

interface PostMessageType {
  boc: string;
  batch: string[];
}

export class Blockchain {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getBlockData (block_id: string): Promise<GetBlockDataDto | undefined> {
    const data = await this.tonApi.get(`blockchain/blocks/${block_id}`, {})

    console.log(data)
    return data
  }

  async getBlockShards (masterchain_seqno: number): Promise<GetBlockShardsDto | undefined> {
    const data = await this.tonApi.get(`blockchain/masterchain/${masterchain_seqno}/shards`, {})

    console.log(data)
    return data
  }

  async getTransactions (block_id: string): Promise<GetTransactionsDto | undefined> {
    const data = await this.tonApi.get(`blockchain/blocks/${block_id}/transactions`, {})

    console.log(data)
    return data
  }

  async getRawConfig (block_id: string): Promise<GetRawDto | undefined> {
    const data = await this.tonApi.get(`blockchain/blocks/${block_id}/config/raw`, {});
  
    console.log(data);
    return data;
  }

  async getTransactionsData (transaction_id: string): Promise<GetTransactionsDataDto | undefined> {
    const data = await this.tonApi.get(`blockchain/transactions/${transaction_id}`, {})

    console.log(data)
    return data
  }

  async getTransactionDataMessage (msg_id: string): Promise<GetTransactionsMessageDataDto | undefined> {
    const data = await this.tonApi.get(`blockchain/messages/${msg_id}/transaction`, {})

    console.log(data)
    return data
  }

  async getValidators (): Promise<GetValidatorsDto | undefined> {
    const data = await this.tonApi.get('blockchain/validators', {})

    console.log(data)
    return data
  }

  async getLastMasterchain (): Promise<GetLastMasterchainDto | undefined> {
    const data = await this.tonApi.get('blockchain/masterchain-head', {})

    console.log(data)
    return data
  }

  async getAccountInfo (account_id: string): Promise<GetAccountInfoType | undefined> {
    const data = await this.tonApi.get(`blockchain/accounts/${account_id}`, {})

    console.log(data)
    return data
  }

  async getAccountTransactions(
    account_id: string,
    after_lt: BigInt,
    before_lt?: BigInt,
    limit?: number
  ): Promise<GetAccountTransactionsDto | undefined> {
    const data: { [key: string]: BigInt | number | undefined } = {};
  
    if (before_lt !== undefined) {
      data['before_lt'] = before_lt;
    }
  
    if (limit !== undefined) {
      data['limit'] = limit;
    }
  
    const url = `blockchain/accounts/${account_id}/transactions`;
  
    const result = await this.tonApi.get(
      url,
      { after_lt, ...data }
    )
  
    console.log(result);
    return result;
  }

  async getMethodAccount(
    account_id: string,
    method_name: string,
    args?: string[]
  ): Promise<GetMethodAccountDto | undefined> {
    const data: { args?: string[] } = {};
  
    if (args !== undefined) {
      data.args = args;
    }
  
    const url = `blockchain/accounts/${account_id}/methods/${method_name}`;
  
    const result = await this.tonApi.get(url, data);
  
    console.log(result);
    return result;
  }

  async postMessage (message: PostMessageType): Promise<string | undefined> {
    const response = await this.tonApi.post('blockchain/message', message)

    console.log(response)
    return response
  }

  async getBlockchainConfig (): Promise<GetBlockchainConfigDto | undefined> {
    const data = await this.tonApi.get(`blockchain/config`, {})

    console.log(data)
    return data
  }

  async getRawBlockchainConfig (): Promise<GetRawBlockchainConfigDto | undefined> {
    const data = await this.tonApi.get(`blockchain/config/raw`, {})

    console.log(data)
    return data
  }

  async getAccountInspect (account_id: string): Promise<GetAccountInspectDto | undefined> {
    const data = await this.tonApi.get(`blockchain/accounts/${account_id}/inspect`, {})

    console.log(data)
    return data
  }
}