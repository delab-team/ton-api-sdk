import { TonApi } from "./ton-api"

import { GetEventDto } from "../types/events/get-event.dto";

export class Events {
  
  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getEvent(event_id: string): Promise<GetEventDto | undefined> {
    const data = await this.tonApi.get('events', { event_id })

    console.log(data)
    return data
  }
}