import { TonApi } from "./ton-api";

import { Trace } from "../types/common";

export class Traces {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getTrace (trace_id: string): Promise<Trace | undefined> {
    const data = await this.tonApi.get(`traces/${trace_id}`, {})

    console.log(data)
    return data
  }
}