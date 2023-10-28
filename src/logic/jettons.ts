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

  async getList(): Promise<GetListDto | undefined> {
    const data = await this.tonApi.get('jettons', {})
    
    console.log(data)
    return data
  }

  async getJettonMetadata(account_id: string): Promise<GetJettonMetadataDto | undefined> {
    const data = await this.tonApi.get('jettons', {account_id})

    console.log(data)
    return data
  }

  async getJettonsHolders (account_id: string): Promise<GetJettonsHoldersDto | undefined> {
    const data = await this.tonApi.get(`jettons/${account_id}/holders`, {})

    console.log(data)
    return data
  }

  async getJettonTransfers (event_id: string): Promise<GetJettonTransfersDto | undefined> {
    const data = await this.tonApi.get(`events/${event_id}/transfers`, {})

    console.log(data)
    return data
  }
}