import { TonApi } from "./ton-api"

import { GetEventDto } from "../types/events/get-event.dto";

export class Events {
  
  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getEvent(event_id: string, accept_language?: string): Promise<GetEventDto | undefined> {
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }

    const res = await this.tonApi.get(`events/${event_id}`, {}, headers)

    console.log(res)
    return res
  }
}