import { TonApi } from "./ton-api"

import { GetMasterchainInfoExtDto } from "../types/lite-server/get-masterchain-info-ext.dto";
import { GetMasterchainInfoDto } from "../types/lite-server/get-masterchain-info.dto";
import { GetRawBlockchainBlock } from "../types/lite-server/get-raw-blockchain-block.dto";
import { GetRawTime } from "../types/lite-server/get-raw-time.dto";
import { GetRawBlockchainBlockStateDto } from "../types/lite-server/get-raw-blockchain-block-state.dto";
import { GetBlockHeaderDto } from "../types/lite-server/get-block-header.dto";
import { GetAccountStateDto } from "../types/lite-server/get-account-state.dto";
import { GetShardInfoDto } from "../types/lite-server/get-shard-info.dto";
import { GetAllShardsInfoDto } from "../types/lite-server/get-all-shards-info.dto";
import { GetRawTransactionsDto } from "../types/lite-server/get-raw-transactions.dto";
import { GetListBlockTransactionsDto } from "../types/lite-server/get-list-block-transactions.dto";
import { GetBlockProofDto } from "../types/lite-server/get-block-proof.dto";
import { GetConfigAllDto } from "../types/lite-server/get-config-all.dto";
import { GetShardBlockProof } from "../types/lite-server/get-shard-block-proof.dto";
import { PostMessageDto, PostMessageType } from "../types/lite-server/post-message.dto";

export class LiteServer {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getMasterchainInfo(): Promise<GetMasterchainInfoDto | undefined> {
    const data = await this.tonApi.get('liteserver/get_masterchain_info', {})

    console.log(data)
    return data
  }

  async getMasterchainInfoExt(mode: number): Promise<GetMasterchainInfoExtDto | undefined> {
    const data = await this.tonApi.get('liteserver/get_masterchain_info_ext', { mode })

    console.log(data)
    return data
  }

  async getRawTime(): Promise<GetRawTime | undefined> {
    const data = await this.tonApi.get('liteserver/get_time', {})

    console.log(data)
    return data
  }

  async getRawBlockchainBlock(block_id: string): Promise<GetRawBlockchainBlock | undefined> {
    const data = await this.tonApi.get(`liteserver/get_block/${block_id}`, {})

    console.log(data)
    return data
  }

  async getRawBlockchainBlockState(block_id: string): Promise<GetRawBlockchainBlockStateDto | undefined> {
    const data = await this.tonApi.get(`liteserver/get_state/${block_id}`, {})

    console.log(data)
    return data
  }

  async getBlockHeader(block_id: string, mode: number): Promise<GetBlockHeaderDto | undefined> {
    const data = await this.tonApi.get(`liteserver/get_block_header/${block_id}`, { mode })

    console.log(data)
    return data
  }

  async postSendMessage(message: PostMessageType): Promise<PostMessageDto | undefined> {
    const res = await this.tonApi.post(`liteserver/send_message`, message)

    console.log(res)
    return res
  }

  async getAccountState(account_id: string): Promise<GetAccountStateDto | undefined> {
    const data = await this.tonApi.get(`liteserver/get_account_state/${account_id}`, {})

    console.log(data)
    return data
  }

  async getShardInfo (block_id: string, workchain: number, shard: number, exact: boolean): Promise<GetShardInfoDto | undefined> {
    const data = await this.tonApi.get(`liteserver/get_shard_info/${block_id}`, { workchain, shard, exact })

    console.log(data)
    return data
  }

  async getAllShardsInfo (block_id: string): Promise<GetAllShardsInfoDto | undefined> {
    const data = await this.tonApi.get(`liteserver/get_all_shards_info/${block_id}`, {})

    console.log(data)
    return data
  }

  async getRawTransactions (account_id: string, count: number, lt: number, hash: string): Promise<GetRawTransactionsDto | undefined> {
    const data = await this.tonApi.get(`liteserver/get_transactions/${account_id}`, { count, lt, hash })    

    console.log(data)
    return data
  }

  async getListBlockTransactions(
    block_id: string,
    mode: number,
    count: number,
    account_id?: string,
    lt?: number
  ): Promise<GetListBlockTransactionsDto | undefined> {
    const data: { mode: number; count: number; account_id?: string; lt?: number } = {
      mode,
      count,
    };
  
    if (account_id !== undefined) {
      data.account_id = account_id;
    }
  
    if (lt !== undefined) {
      data.lt = lt;
    }
  
    const result = await this.tonApi.get(
      `liteserver/list_block_transactions/${block_id}`,
      data
    );
  
    console.log(result);
    return result;
  }
  
  async getBlockProof(
    known_block: string,
    target_block: string,
    mode?: number
  ): Promise<GetBlockProofDto | undefined> {
    const data: { known_block: string; target_block: string; mode?: number } = {
      known_block,
      target_block,
    };
  
    if (mode !== undefined) {
      data.mode = mode;
    }
  
    const result = await this.tonApi.get('liteserver/get_block_proof', data);
  
    console.log(result);
    return result;
  }
  
  async getConfigAll (block_id: string, mode: number): Promise<GetConfigAllDto | undefined> {
    const data = await this.tonApi.get(`liteserver/get_config_all/${block_id}`, { mode })

    console.log(data)
    return data
  }

  async getShardBlockProof (block_id: string): Promise<GetShardBlockProof | undefined> {
    const data = await this.tonApi.get(`liteserver/get_shard_block_proof/${block_id}`, {})

    console.log(data)
    return data
  }
}