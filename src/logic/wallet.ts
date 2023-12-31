import { TonApi } from "./ton-api"

import { GetBackupDto } from "../types/wallet/get-backup.dto";
import { PostAuthProofDto, PostMessageType } from "../types/wallet/post-auth-proof.dto";

import { Accounts, Seqno } from "../types/common";

export class Wallet {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getBackup(x_ton_connect_auth: string): Promise<GetBackupDto | undefined> {

    const headers: { 'X-TonConnect-Auth'?: string } = {};
    if (x_ton_connect_auth !== undefined) {
      headers['X-TonConnect-Auth'] = x_ton_connect_auth;
    }

    const data = await this.tonApi.get('wallet/backup', {}, headers)

    console.log(data)
    return data
  }

  async putBackup(x_ton_connect_auth: string, file: Buffer): Promise<string | undefined> {
    const headers: { 'X-TonConnect-Auth'?: string } = {};
    if (x_ton_connect_auth !== undefined) {
      headers['X-TonConnect-Auth'] = x_ton_connect_auth;
    }

    const data = await this.tonApi.get('wallet/backup', file, headers)

    console.log(data)
    return data
  }

  async postAuthProof(message: PostMessageType): Promise<PostAuthProofDto | undefined> {
    const res = await this.tonApi.post('wallet/auth/proof', message)

    console.log(res)
    return res
  }

  async getWallets(public_key: string): Promise<Accounts | undefined> {
    const data = await this.tonApi.get(`pubkeys/${public_key}/wallets`, {})

    console.log(data)
    return data
  }

  async getAccountSeqno(account_id: string): Promise<Seqno | undefined> {
    const data = await this.tonApi.get(`wallet/${account_id}/seqno`, {})

    console.log(data)
    return data
  }
}