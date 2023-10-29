import { TonApi } from "./ton-api"

import { GetJettonMetadataDto } from "../types/jettons/get-jetton-metadata.dto";
import { GetJettonTransfersDto } from "../types/jettons/get-jetton-transfers.dto";
import { GetJettonsHoldersDto } from "../types/jettons/get-jettons-holders.dto";
import { GetListDto } from "../types/jettons/get-list.dto";

export class Jettons {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getList(
    limit?: number,
    offset?: number
  ): Promise<GetListDto | undefined> {
    const data: { limit?: number; offset?: number } = {};
  
    if (limit !== undefined) {
      data.limit = limit;
    }
  
    if (offset !== undefined) {
      data.offset = offset;
    }
  
    const result = await this.tonApi.get('jettons', data);
  
    console.log(result);
    return result;
  }

  async getJettonMetadata(account_id: string): Promise<GetJettonMetadataDto | undefined> {
    const data = await this.tonApi.get('jettons', {account_id})

    console.log(data)
    return data
  }

  async getJettonsHolders(
    account_id: string,
    limit?: number,
    offset?: number
  ): Promise<GetJettonsHoldersDto | undefined> {
    const data: { limit?: number; offset?: number } = {};
  
    if (limit !== undefined) {
      data.limit = limit;
    }
  
    if (offset !== undefined) {
      data.offset = offset;
    }
  
    const result = await this.tonApi.get(
      `jettons/${account_id}/holders`,
      data
    );
  
    console.log(result);
    return result;
  }

  async getJettonTransfers (event_id: string, accept_language?: string): Promise<GetJettonTransfersDto | undefined> {
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }

    const data = await this.tonApi.get(`events/${event_id}/jettons`, {}, headers)

    console.log(data)
    return data
  }
}