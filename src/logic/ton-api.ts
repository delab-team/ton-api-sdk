import axios, { AxiosRequestConfig } from 'axios';
import { Blockchain } from './blockchain';
import { Accounts } from './accounts';
import { NFT } from './nft';

export class TonApi {
  private _url: string = 'https://tonapi.io/v2/'

  private _urlTest: string = 'https://testnet.tonapi.io/v2/'

  private _network: 'testnet' | 'mainnet'

  private _token: string

  public Blockchain: Blockchain
  public Accounts: Accounts
  public NFT: NFT

  constructor (token: string, network: 'testnet' | 'mainnet') {
    this._network = network
    this._token = token

    this.Blockchain = new Blockchain(this)
    this.Accounts = new Accounts(this)
    this.NFT = new NFT(this)
  }

  public async get (url: string, data: any): Promise<any | undefined> {
    let urlFull
    if (this._network === 'mainnet') {
      urlFull = this._url
    }
    if (this._network === 'testnet') {
      urlFull = this._urlTest
    }

    const res = await axios.get(`${urlFull}${url}?${new URLSearchParams(data)}`, { headers: { Authorization: `Bearer ${this._token}` } })

    if (res.data.error) {
      console.error(res.data.result)
      return undefined
    }

    return res.data
  }

  public async post(url: string, data: any): Promise<any | undefined> {
    let urlFull;
    if (this._network === 'mainnet') {
      urlFull = this._url;
    } else if (this._network === 'testnet') {
      urlFull = this._urlTest;
    }

    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${this._token}` }
    };

    try {
      const res = await axios.post(`${urlFull}${url}`, data, config);

      if (res.data.error) {
        console.error(res.data.result);
        return undefined;
      }

      return res.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public async put(url: string, data: any): Promise<any | undefined> {
    let urlFull;
    if (this._network === 'mainnet') {
      urlFull = this._url;
    } else if (this._network === 'testnet') {
      urlFull = this._urlTest;
    }

    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${this._token}` }
    };

    try {
      const res = await axios.put(`${urlFull}${url}`, data, config);

      if (res.data.error) {
        console.error(res.data.result);
        return undefined;
      }

      return res.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}