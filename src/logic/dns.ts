import { TonApi } from "./ton-api";

import { Auctions, DnsRecord, DomainBids, DomainInfo } from "../types/common";

export class DNS {

  private tonApi: TonApi

  constructor(tonApi: TonApi) {
    this.tonApi = tonApi;
  }

  async getFullInfo(domain_name: string): Promise<DomainInfo | undefined> {
    const data = await this.tonApi.get(`dns/${domain_name}`, {})

    console.log(data)
    return data
  }

  async getDnsResolveForName (domain_name: string): Promise<DnsRecord | undefined> {
    const data = await this.tonApi.get(`dns/${domain_name}/resolve`, {})

    console.log(data)
    return data
  }

  async getDomainBids (domain_name: string): Promise<DomainBids | undefined> {
    const data = await this.tonApi.get(`dns/${domain_name}/bids`, {})
    
    console.log(data)
    return data
  }

  async getAllAuctions (tld?: string): Promise<Auctions | undefined> {
    const data = await this.tonApi.get(`dns/auctions`, { tld })

    console.log(data)
    return data
  }
}