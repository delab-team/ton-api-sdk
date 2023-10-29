import { TonApi } from "./ton-api";

import { PostEmulateEventsDto } from "../types/emulation/post-emulate-events.dto";
import { PostEmulateTracesDto } from "../types/emulation/post-emulate-traces.dto";
import { PostEmulateWallet } from "../types/emulation/post-emulate-wallet.dto";
import { PostMessageBlockchainDto } from "../types/emulation/post-message-blockchain.dto";

interface PostMessageType {
  boc: string
}

export class Emulation {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async postEmulateEvents(message: PostMessageType, accept_language?: string): Promise<PostEmulateEventsDto | undefined> {
    const data: { boc: string; } = { boc: message.boc };

    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }

    const response = await this.tonApi.post('events/emulate', data, headers)

    console.log(response)
    return response
  }

  async postEmulateTraces(message: PostMessageType): Promise<PostEmulateTracesDto | undefined> {

    const response = await this.tonApi.post('traces/emulate', message)

    console.log(response)
    return response
  }

  async postEmulateWallet(
    message: PostMessageType,
    accept_language?: string
  ): Promise<PostEmulateWallet | undefined> {
    const data: { boc: string; } = { boc: message.boc };
  
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }
  
    const response = await this.tonApi.post('wallet/emulate', data, headers);
  
    console.log(response);
    return response;
  }  

  async postMessageBlockchain(
    account_id: string,
    message: PostMessageType,
    accept_language?: string
  ): Promise<PostMessageBlockchainDto | undefined> {
  
    const data: { boc: string; } = { boc: message.boc };
    
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }
  
    const response = await this.tonApi.post(
      `accounts/${account_id}/events/emulate`,
      data,
      headers
    );
  
    console.log(response);
    return response;
  }
  
}
