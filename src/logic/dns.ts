import { TonApi } from "./ton-api";

import { GetAllAuctionsDto } from "../types/dns/get-all-auctions.dto";
import { GetDnsResolveForNameDto } from "../types/dns/get-dns-resolve-for-name.dto";
import { GetDomainBidsDto } from "../types/dns/get-domain-bids-dto";
import { GetFullInfoDto } from "../types/dns/get-full-info.dto";

export class DNS {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getFullInfo(domain_name: string): Promise<GetFullInfoDto | undefined> {
    const data = await this.tonApi.get(`dns/${domain_name}`, {})

    console.log(data)
    return data
  }

  async getDnsResolveForName (domain_name: string): Promise<GetDnsResolveForNameDto | undefined> {
    const data = await this.tonApi.get(`dns/${domain_name}/resolve`, {})

    console.log(data)
    return data
  }

  async getDomainBids (domain_name: string): Promise<GetDomainBidsDto | undefined> {
    const data = await this.tonApi.get(`dns/${domain_name}/bids`, {})
    
    console.log(data)
    return data
  }

  async getAllAuctions (tld?: string): Promise<GetAllAuctionsDto | undefined> {
    const data = await this.tonApi.get(`dns/auctions`, { tld })

    console.log(data)
    return data
  }
}