import { TonApi } from "./ton-api";

import { GetNftCollectionsByAddressDto } from "../types/nft/get-nft-collections-by-address.dto";
import { GetNftCollectionsDto } from "../types/nft/get-nft-collections.dto";
import { GetNftItemByAddressDto } from "../types/nft/get-nft-item-by-address.dto";
import { GetNftItemsFromCollection } from "../types/nft/get-nft-items-from-collection.dto";
import { GetNftTransferHistoryDto } from "../types/nft/get-nft-transfer-history.dto";
import { TransferNftHistoryDto } from "../types/nft/get-transfer-nft-history.dto";

interface PostMessageType {
  account_ids: string[]
}

export class NFT {
  
  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi
  }

  async getTransferNftHistory(
    account_id: string,
    limit: number,
    before_lt?: number,
    start_date?: number,
    end_date?: number,
    accept_language?: string
  ): Promise<TransferNftHistoryDto | undefined> {
    const data: {
      limit: number;
      before_lt?: number;
      start_date?: number;
      end_date?: number;
    } = { limit };
  
    if (before_lt !== undefined) {
      data.before_lt = before_lt;
    }
  
    if (start_date !== undefined) {
      data.start_date = start_date;
    }
  
    if (end_date !== undefined) {
      data.end_date = end_date;
    }
  
    const headers: { 'Accept-Language'?: string } = {};
    if (accept_language !== undefined) {
      headers['Accept-Language'] = accept_language;
    }
  
    const result = await this.tonApi.get(
      `accounts/${account_id}/nfts/history`,
      data,
      headers
    );
  
    console.log(result);
    return result;
  }

  async getNftCollections(
    limit?: number,
    offset?: number
  ): Promise<GetNftCollectionsDto | undefined> {
    const data: { limit?: number; offset?: number } = {};
  
    if (limit !== undefined) {
      data.limit = limit;
    }
  
    if (offset !== undefined) {
      data.offset = offset;
    }
  
    const result = await this.tonApi.get(
      `nfts/collections`,
      data
    );
  
    console.log(result);
    return result;
  }

  async getNftCollectionsByAddress (account_id: string): Promise<GetNftCollectionsByAddressDto | undefined> {
    const data = await this.tonApi.get(`nfts/collections/${account_id}`, {})

    console.log(data)
    return data
  }

  async getNftItemsFromCollection(
    account_id: string,
    limit?: number,
    offset?: number
  ): Promise<GetNftItemsFromCollection | undefined> {
    const data: { limit?: number; offset?: number } = {};
  
    if (limit !== undefined) {
      data.limit = limit;
    }
  
    if (offset !== undefined) {
      data.offset = offset;
    }
  
    const result = await this.tonApi.get(
      `nfts/collections/${account_id}/items`,
      data
    );
  
    console.log(result);
    return result;
  }

  async postBulk(message: PostMessageType) {
    const data = await this.tonApi.post(`nfts/_bulk`, message)

    console.log(data)
    return data
  }
  
  async getNftItemByAddress (account_id: string): Promise<GetNftItemByAddressDto | undefined> {
    const data = await this.tonApi.get(`nfts/${account_id}`, {})

    console.log(data)
    return data
  }

  async getNftTransferHistory (account_id: string, limit: number, before_lt?: number, start_date?: number, end_date?: number, accept_language?: string): Promise<GetNftTransferHistoryDto | undefined> {
   
    const data: {
     limit: number,
     before_lt?: number,
     start_date?: number, 
     end_date?: number
    } = { limit }
 
    if (before_lt !== undefined) {
     data.before_lt = before_lt;
   }
 
   if (start_date !== undefined) {
     data.start_date = start_date;
   }
 
   if (end_date !== undefined) {
     data.end_date = end_date;
   }
    
     const headers: { 'Accept-Language'?: string } = {};
     if (accept_language !== undefined) {
       headers['Accept-Language'] = accept_language;
     }
 
     const res = await this.tonApi.get(`nfts/${account_id}/history`, data, headers)
 
     console.log(res)
     return res
   }
}