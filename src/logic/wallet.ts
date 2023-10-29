import { TonApi } from "./ton-api"

import { GetAccountSeqnoDto } from "../types/wallet/get-account-seqno.dto";
import { GetBackupDto } from "../types/wallet/get-backup.dto";
import { GetWalletsDto } from "../types/wallet/get-wallets.dto";
import { PostAuthProofDto, PostMessageType } from "../types/wallet/post-auth-proof.dto";

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

  async getWallets(public_key: string): Promise<GetWalletsDto | undefined> {
    const data = await this.tonApi.get(`pubkeys/${public_key}/wallets`, {})

    console.log(data)
    return data
  }

  async getAccountSeqno(account_id: string): Promise<GetAccountSeqnoDto | undefined> {
    const data = await this.tonApi.get(`wallet/${account_id}/seqno`, {})

    console.log(data)
    return data
  }
}