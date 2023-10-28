import { TonApi } from "./ton-api"

import { GetStorageProvidersDto } from "../types/storage/get-storage-providers.dto";

export class Storage {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getStorageProviders(): Promise<GetStorageProvidersDto | undefined> {
    const data = await this.tonApi.get('storage/providers', {})

    console.log(data)
    return data
  }
}