import { TonApi } from "./ton-api"

import { GetPayloadDto } from "../types/connect/get-payload.dto";

export class Connect {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getPayload(): Promise<GetPayloadDto | undefined> {
    const data = await this.tonApi.get('tonconnect/payload', {})

    console.log(data)
    return data
  }
}