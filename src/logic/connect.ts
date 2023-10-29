import { TonApi } from "./ton-api"

import { GetPayloadDto } from "../types/connect/get-payload.dto";
import { PostStateInitDto } from "../types/connect/post-state-init.dto";

interface PostMessageType {
  state_init: string
}

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

  async postStateInit(message: PostMessageType): Promise<PostStateInitDto | undefined> {
    const res = await this.tonApi.post('tonconnect/stateinit', message)

    console.log(res)
    return res
  }
}