import { TonApi } from "./ton-api"

import { GetAccountSeqnoDto } from "../types/wallet/get-account-seqno.dto";
import { GetBackupDto } from "../types/wallet/get-backup.dto";
import { GetWalletsDto } from "../types/wallet/get-wallets.dto";

export class Wallet {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getBackup(x_ton_connect_auth: string): Promise<GetBackupDto | undefined> {
    const data = await this.tonApi.get('wallet/backup', {x_ton_connect_auth})

    console.log(data)
    return data
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