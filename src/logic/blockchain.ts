import { TonApi } from "./ton-api"

import { GetAccountInfoType } from "../types/blockchain/get-account-info.dto";
import { GetAccountTransactionsType } from "../types/blockchain/get-account-transactions.dto";
import { GetBlockDataDto } from "../types/blockchain/get-block-data.dto";
import { GetLastMasterchainType } from "../types/blockchain/get-last-masterchain.dto";
import { GetMethodAccountType } from "../types/blockchain/get-method-account.dto";
import { GetRawType } from "../types/blockchain/get-raw-config.dto";
import { GetTransactionsType } from "../types/blockchain/get-transactions.dto";
import { GetTransactionsDataType } from "../types/blockchain/get-transactions-data.dto";
import { GetTransactionsMessageDataType } from "../types/blockchain/get-transactions-message-data.dto";
import { GetValidatorsType } from "../types/blockchain/get-validators.dto";
import { GetBlockchainConfigType } from "../types/blockchain/get-blockchain-config.dto";
import { GetRawBlockchainConfigType } from "../types/blockchain/get-raw-blockhain-config.dto";
import { GetAccountInspectType } from "../types/blockchain/get-account-inspect.dto";

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

  async getTransactions (block_id: string): Promise<GetTransactionsType | undefined> {
    const data = await this.tonApi.get(`blockchain/blocks/${block_id}/transactions`, {})

    console.log(data)
    return data
  }

  async getRawConfig (block_id: string): Promise<GetRawType | undefined> {
    const data = await this.tonApi.get(`blockchain/blocks/${block_id}/config/raw`, {});
  
    console.log(data);
    return data;
  }

  async getTransactionsData (transaction_id: string): Promise<GetTransactionsDataType | undefined> {
    const data = await this.tonApi.get(`blockchain/transactions/${transaction_id}`, {})

    console.log(data)
    return data
  }

  async getTransactionDataMessage (msg_id: string): Promise<GetTransactionsMessageDataType | undefined> {
    const data = await this.tonApi.get(`blockchain/messages/${msg_id}/transaction`, {})

    console.log(data)
    return data
  }

  async getValidators (): Promise<GetValidatorsType | undefined> {
    const data = await this.tonApi.get('blockchain/validators', {})

    console.log(data)
    return data
  }

  async getLastMasterchain (): Promise<GetLastMasterchainType | undefined> {
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
    after_lt: number,
    before_lt?: number,
    limit?: number
  ): Promise<GetAccountTransactionsType | undefined> {
    const data: { [key: string]: number | undefined } = {};
  
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
    args?: string | string[]
  ): Promise<GetMethodAccountType | undefined> {
    const data: { args?: string | string[] } = {};
  
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

  async getBlockchainConfig (): Promise<GetBlockchainConfigType | undefined> {
    const data = await this.tonApi.get(`blockchain/config`, {})

    console.log(data)
    return data
  }

  async getRawBlockchainConfig (): Promise<GetRawBlockchainConfigType | undefined> {
    const data = await this.tonApi.get(`blockchain/config/raw`, {})

    console.log(data)
    return data
  }

  async getAccountInspect (account_id: string): Promise<GetAccountInspectType | undefined> {
    const data = await this.tonApi.get(`blockchain/accounts/${account_id}/inspect`, {})

    console.log(data)
    return data
  }
}