import { TonApi } from "./ton-api"

import { Event, JettonHolders, JettonInfo, Jettons as JettonsDto } from '../types/common'

export class Jettons {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getList(
    limit?: number,
    offset?: number
  ): Promise<JettonsDto | undefined> {
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

  async getJettonMetadata(account_id: string): Promise<JettonInfo | undefined> {
    const data = await this.tonApi.get('jettons', {account_id})

    console.log(data)
    return data
  }

  async getJettonsHolders(
    account_id: string,
    limit?: number,
    offset?: number
  ): Promise<JettonHolders | undefined> {
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

  async getJettonTransfers (event_id: string, accept_language?: string): Promise<Event | undefined> {
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }

    const data = await this.tonApi.get(`events/${event_id}/jettons`, {}, headers)

    console.log(data)
    return data
  }
}