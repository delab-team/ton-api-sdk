import axios, { AxiosRequestConfig } from 'axios';

import { Blockchain } from './blockchain';
import { Emulation } from "./emulation";
import { Accounts } from './accounts';
import { NFT } from './nft';
import { DNS } from './dns';
import { Traces } from './traces';
import { Staking } from './staking';
import { Storage } from './storage';
import { Rates } from './rates';
import { Connect } from './connect';
import { Wallet } from './wallet';
import { Events } from "./events";
import { Jettons } from "./jettons";
import { LiteServer } from "./lite-server";

export class TonApi {
  private _url: string = 'https://tonapi.io/v2/'

  private _urlTest: string = 'https://testnet.tonapi.io/v2/'

  private _network: 'testnet' | 'mainnet'

  private _token: string

  public Blockchain: Blockchain
  public Emulation: Emulation
  public Accounts: Accounts
  public NFT: NFT
  public DNS: DNS
  public Traces: Traces
  public Staking: Staking
  public Storage: Storage
  public Rates: Rates
  public Connect: Connect
  public Wallet: Wallet
  public LiteServer: LiteServer
  public Events: Events
  public Jettons: Jettons

  constructor (token: string, network: 'testnet' | 'mainnet') {
    this._network = network

    this._token = token

    this.Blockchain = new Blockchain(this)
    this.Emulation = new Emulation(this)
    this.Accounts = new Accounts(this)
    this.NFT = new NFT(this)
    this.DNS = new DNS(this)
    this.Traces = new Traces(this)
    this.Staking = new Staking(this)
    this.Storage = new Storage(this)
    this.Rates = new Rates(this)
    this.Connect = new Connect(this)
    this.Wallet = new Wallet(this)
    this.LiteServer = new LiteServer(this)
    this.Events = new Events(this)
    this.Jettons = new Jettons(this)
  }

  public async get(url: string, data: any, headers: Record<string, string> = {}): Promise<any | undefined> {
    let urlFull;
    if (this._network === 'mainnet') {
      urlFull = this._url;
    }
    if (this._network === 'testnet') {
      urlFull = this._urlTest;
    }
  
    const config = {
      headers: {
        ...headers,
        Authorization: `Bearer ${this._token}`
      }
    };
  
    const res = await axios.get(`${urlFull}${url}?${new URLSearchParams(data)}`, config);
  
    if (res.data.error) {
      console.error(res.data.result);
      return undefined;
    }
  
    return res.data;
  }

  public async post(url: string, data: any, headers: Record<string, string> = {}): Promise<any | undefined> {
    let urlFull;
    if (this._network === 'mainnet') {
        urlFull = this._url;
    } else if (this._network === 'testnet') {
        urlFull = this._urlTest;
    }

    const config: AxiosRequestConfig = {
        headers: {
            ...headers,
            Authorization: `Bearer ${this._token}`
        }
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

  public async put(url: string, data: any, headers: Record<string, string> = {}): Promise<any | undefined> {
      let urlFull;
      if (this._network === 'mainnet') {
          urlFull = this._url;
      } else if (this._network === 'testnet') {
          urlFull = this._urlTest;
      }

      const config: AxiosRequestConfig = {
          headers: {
              ...headers,
              Authorization: `Bearer ${this._token}`
          }
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