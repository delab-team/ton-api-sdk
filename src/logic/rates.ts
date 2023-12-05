import { TonApi } from "./ton-api"

import { GetChartTokenDto } from "../types/rates/get-chart-token.dto";
import { GetTokenPriceDto } from "../types/rates/get-token-price.dto";


export class Rates {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getTokenPrice(tokens: string, currencies: string): Promise<GetTokenPriceDto | undefined> {
    const data = await this.tonApi.get('rates', { tokens, currencies })

    console.log(data)
    return data
  }

  async getChartToken(
    token: string,
    currency?: string,
    start_date?: number,
    end_date?: number
  ): Promise<GetChartTokenDto | undefined> {
    const data: { token: string; currency?: string; start_date?: number; end_date?: number } = { token };
  
    if (currency !== undefined) {
      data.currency = currency;
    }
  
    if (start_date !== undefined) {
      data.start_date = start_date;
    }
  
    if (end_date !== undefined) {
      data.end_date = end_date;
    }
  
    const result = await this.tonApi.get('rates/chart', data);
  
    console.log(result);
    return result;
  }
}