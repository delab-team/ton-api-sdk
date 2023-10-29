import { TonApi } from "./ton-api";

import { GetTraceDto } from "../types/traces/get-trace.dto";

export class Traces {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getTrace (trace_id: string): Promise<GetTraceDto | undefined> {
    const data = await this.tonApi.get(`traces/${trace_id}`, {})

    console.log(data)
    return data
  }
}