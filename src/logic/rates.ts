import { TonApi } from "./ton-api"

import { GetChartTokenDto } from "../types/rates/get-chart-token.dto";
import { GetTokenPriceDto } from "../types/rates/get-token-price.dto";

export class Rates {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getTokenPrice(token: string, currencies: string | string[]): Promise<GetTokenPriceDto | undefined> {
    const data = await this.tonApi.get('rates', { token, currencies })

    console.log(data)
    return data
  }

  async getChartToken(token: string): Promise<GetChartTokenDto | undefined> {
    const data = await this.tonApi.get('rates/chart', { token })

    console.log(data)
    return data
  }
}