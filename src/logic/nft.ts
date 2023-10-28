import { TonApi } from "./ton-api";

import { GetNftCollectionsByAddressDto } from "../types/nfts/get-nft-collections-by-address.dto";
import { GetNftCollectionsDto } from "../types/nfts/get-nft-collections.dto";
import { GetNftItemByAddressDto } from "../types/nfts/get-nft-item-by-address.dto";
import { GetNftItemsFromCollection } from "../types/nfts/get-nft-items-from-collection.dto";
import { GetNftTransferHistoryDto } from "../types/nfts/get-nft-transfer-history.dto";
import { TransferNftHistoryDto } from "../types/nfts/get-transfer-nft-history.dto";

export class NFT {
  
  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi
  }

  async getTransferNftHistory (account_id: string): Promise<TransferNftHistoryDto | undefined> {
    const data = await this.tonApi.get(`accounts/${account_id}/nfts/history`, {})

    console.log(data)
    return data
  }

  async getNftCollections (limit?: string, offset?: number): Promise<GetNftCollectionsDto | undefined> {
    const data = await this.tonApi.get(`nfts/collections`, { limit, offset })

    console.log(data)
    return data
  }

  async getNftCollectionsByAddress (account_id: string): Promise<GetNftCollectionsByAddressDto | undefined> {
    const data = await this.tonApi.get(`nfts/collections/${account_id}`, {})

    console.log(data)
    return data
  }

  async getNftItemsFromCollection (account_id: string): Promise<GetNftItemsFromCollection | undefined> {
    const data = await this.tonApi.get(`nfts/collections/${account_id}/items`, {})

    console.log(data)
    return data
  }

  async getNftItemByAddress (account_id: string): Promise<GetNftItemByAddressDto | undefined> {
    const data = await this.tonApi.get(`nfts/${account_id}`, {})

    console.log(data)
    return data
  }

  async getNftTransferHistory (account_id: string): Promise<GetNftTransferHistoryDto | undefined> {
    const data = await this.tonApi.get(`nfts/${account_id}/history`, {})

    console.log(data)
    return data
  }
}