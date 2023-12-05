<h1 align="center">
  <a href="https://github.com/delab-team/ton-api-sdk">
    Ton-Api-SDK
  </a>
</h1>

<p align="center">
  <a href="LICENSE">
    <img src="https://camo.githubusercontent.com/75c3e724ce69f6c3d1e997e9066547e00cb9000aaf566eadc8a52ab76c7d07f8/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f64656c61622d7465616d2f636f6e6e6563743f7374796c653d666f722d7468652d6261646765" alt="license mit" />
  </a>
  <a href="TYPESCRIPT">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </a>
  <a href="NPM">
    <img src="https://img.shields.io/npm/v/@delab-team/ton-api-sdk" height="28px" />
  </a>
</p>

<p align="center">
  Ton-Api-SDK is a library for interacting with the Ton blockchain API. It provides a set of tools and features to help developers build applications and services that utilize the Ton blockchain efficiently.
</p>

## API Doc: <a href="https://docs.tonconsole.com/tonapi/api-v2">TON Api</a>

## Install

-   **as local project package**

```jsx
yarn add @delab-team/ton-api-sdk
```

## Example

```jsx
    const tonApi = new TonApi('AFXRKLZM2YCJ67AAAAAE4XDRSACSYEOYKQKOSUVUKMXNMP2AKUTWJ2UVBPTTQZWRGZMLALY', 'mainnet');
    const blockchain = tonApi.Blockchain
```

## Blockchain

- `path`: /v2/blockchain/blocks/{block_id}
- `method_name`: getBlockData
- `description`: Get blockchain block data <br />
=
- `path`: /v2/blockchain/blocks/{block_id}/transactions
- `method_name`: getTransactions
- `description`: Get transactions from block <br />
=
- `path`: /v2/blockchain/blocks/{block_id}/config/raw
- `method_name`: getRawConfig
- `description`: Get raw blockchain config from a specific block, if present.
=
- `path`: /v2/blockchain/transactions/{transaction_id}
- `method_name`: getTransactionsData
- `description`: Get transaction data <br />
=
- `path`: /v2/blockchain/messages/{msg_id}/transaction
- `method_name`: getTransactionDataMessage
- `description`: Get transaction data by message hash <br />
= 
- `path`: /v2/blockchain/validators
- `method_name`: getValidators
- `description`: Get blockchain validators <br />
=
- `path`: /v2/blockchain/masterchain-head
- `method_name`: getLastMasterchain
- `description`: Get last known masterchain block
= 
- `path`: /v2/blockchain/accounts/{account_id}
- `method_name`: getAccountInfo
- `description`: Get low-level information about an account taken directly from the blockchain. <br />
=
- `path`: /v2/blockchain/accounts/{account_id}/transactions
- `method_name`: getAccountTransactions
- `description`: Get account transactions <br />
=
- `path`: /v2/blockchain/accounts/{account_id}/methods/{method_name}
- `method_name`: getMethodAccount
- `description`: Execute get method for account <br />
=
- `path`: /v2/blockchain/message
- `method_name`: postMessage
- `description`: Send message to blockchain <br />
=
- `path`: /v2/blockchain/config
- `method_name`: getBlockchainConfig
- `description`: Get blockchain config <br />
=
- `path`: /v2/blockchain/config/raw
- `method_name`: getRawBlockchainConfig
- `description`: Get raw blockchain config <br />
=
- `path`: /v2/blockchain/accounts/{account_id}/inspect
- `method_name`: getAccountInspect
- `description`: Blockchain account inspect <br />

## Emulation

- `path`: /v2/events/emulate
- `method_name`: postEmulateEvents
- `description`: Emulate sending message to blockchain <br />
= 
- `path`: /v2/traces/emulate
- `method_name`: postEmulateTraces
- `description`: Emulate sending message to blockchain <br />
=
- `path`: /v2/wallet/emulate
- `method_name`: postEmulateWallet
- `description`: Emulate sending message to blockchain <br />
=
- `path`: /v2/accounts/{account_id}/events/emulate
- `method_name`: postMessageBlockchain
- `description`: Emulate sending message to blockchain <br />

## Accounts

- `path`: /v2/address/{account_id}/parse
- `method_name`: getParseAddress
- `description`: parse address and display in all formats
=
- `path`: /v2/accounts/_bulk
- `method_name`: postBulk
- `description`: Get human-friendly information about several accounts without low-level details. <br />
=
- `path`: /v2/accounts/{account_id}
- `method_name`: getHumanFriendlyInfo
- `description`: Get human-friendly information about an account without low-level details. <br />
=
- `path`: /v2/accounts/{account_id}/dns/backresolve
- `method_name`: getAccountsDomains
- `description`: Get account's domains <br />
=
- `path`: /v2/accounts/{account_id}/jettons
- `method_name`: getAllJettonsBalances
- `description`: Get all Jettons balances by owner address <br />
=
- `path`: /v2/accounts/{account_id}/jettons/history
- `method_name`: getTransferJettonsHistory
- `description`: Get the transfer jettons history for account <br />
=
- `path`: /v2/accounts/{account_id}/jettons/{jetton_id}/history
- `method_name`: getTransferJettonHistory
- `description`: Get the transfer jetton history for account and jetton <br />
=
- `path`: /v2/accounts/{account_id}/nfts
- `method_name`: getAllNftItems
- `description`: Get all NFT items by owner address <br />
=
- `path`: /v2/accounts/{account_id}/events
- `method_name`: getEventsAccount
- `description`: Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time. <br />
=
- `path`: /v2/accounts/{account_id}/events/{event_id}
- `method_name`: getEventsAccountById
- `description`:  Get event for an account by event_id <br />
=
- `path`: /v2/accounts/{account_id}/traces
- `method_name`: getTracesAccount
- `description`: Get traces for account <br />
=
- `path`: /v2/accounts/{account_id}/subscriptions
- `method_name`: getAllSubscriptions
- `description`: Get all subscriptions by wallet address <br />
=
- `path`: /v2/accounts/{account_id}/reindex
- `method_name`: postUpdateInternalCache
- `description`: Update internal cache for a particular account <br />
=
- `path`: /v2/accounts/search
- `method_name`: getSearch
- `description`: Search by account domain name <br />
=
- `path`: /v2/accounts/{account_id}/dns/expiring
- `method_name`: getTonDns
- `description`: Get expiring account .ton dns <br />
=
- `path`: /v2/accounts/{account_id}/publickey
- `method_name`: getPublicKey
- `description`: Get public key by account id <br />
=
- `path`: /v2/accounts/{account_id}/diff
- `method_name`: getAccountsBalanceChange
- `description`: Get account's balance change <br />
=

## NFT
==
- `path`: /v2/accounts/{account_id}/nfts/history
- `method_name`: getTransferNftHistory
- `description`: Get the transfer nft history <br />
=
- `path`: /v2/nfts/collections
- `method_name`: getNftCollections
- `description`: Get NFT collections <br />
=
- `path`: /v2/nfts/collections/{account_id}
- `method_name`: getNftCollectionsByAddress
- `description`: Get NFT collection by collection address <br />
=
- `path`: /v2/nfts/collections/{account_id}/items
- `method_name`: getNftItemsFromCollection
- `description`: Get NFT items from collection by collection address <br />
=
- `path`: /v2/nfts/_bulk
- `method_name`: postBulk
- `description`: Get NFT items by their addresses <br />
=
- `path`: /v2/nfts/{account_id}
- `method_name`: getNftItemByAddress
- `description`: Get NFT item by its address <br />
=
- `path`: /v2/nfts/{account_id}/history
- `method_name`: getNftTransferHistory
- `description`: Get the transfer nfts history for account <br />

## DNS
- `path`: /v2/dns/{domain_name}
- `method_name`: getFullInfo
- `description`: Get full information about domain name <br />
=
- `path`: /v2/dns/{domain_name}/resolve
- `method_name`: getDnsResolveForName
- `description`: DNS resolve for domain name <br />
=
- `path`: /v2/dns/{domain_name}/bids
- `method_name`: getDomainBids
- `description`: Get domain bids <br />
=
- `path`: /v2/dns/auctions
- `method_name`: getAllAuctions
- `description`: Get all auctions <br />
=

## Traces
- `path`: /v2/traces/{trace_id}
- `method_name`: getTrace
- `description`: Get the trace by trace ID or hash of any transaction in trace <br />
=

## Events
- `path`: /v2/events/{event_id}
- `method_name`: /v2/events/{event_id}
- `description`: Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time. <br />
=

## Jettons
- `path`: /v2/jettons
- `method_name`: getList
- `description`: Get a list of all indexed jetton masters in the blockchain. <br />
=
- `path`: /v2/jettons/{account_id}
- `method_name`: getJettonMetadata
- `description`: Get jetton metadata by jetton master address <br />
=
- `path`: /v2/jettons/{account_id}/holders
- `method_name`: getJettonsHolders
- `description`: Get jetton's holders <br />
=
- `path`: /v2/events/{event_id}/jettons
- `method_name`: getJettonTransfers
- `description`: Get only jetton transfers in the event <br />
=

## Staking

- `path`: /v2/staking/nominator/{account_id}/pools
- `method_name`: getAllPools
- `description`: All pools where account participates <br />
=
- `path`: /v2/staking/pool/{account_id}
- `method_name`: getStakingPoolInfo
- `description`: Stacking pool info <br />
=
- `path`: /v2/staking/pool/{account_id}/history
- `method_name`: getPoolHistory
- `description`: Pool history <br />
=
- `path`: All pools available in network
- `method_name`: getAllPoolsAvailable
- `description`: All pools available in network <br />
=

## Storage

- `path`: /v2/storage/providers
- `method_name`: getStorageProviders
- `description`: Get TON storage providers deployed to the blockchain. <br />
=

## Rates
- `path`: /v2/rates
- `method_name`: getTokenPrice
- `description`: Get the token price to the currency <br />
=
- `path`: /v2/rates/chart
- `method_name`: getChartToken
- `description`: Get chart by token <br />
=

## Connect
- `path`: /v2/tonconnect/payload
- `method_name`: getPayload
- `description`: Get a payload for further token receipt <br />
=
- `path`: /v2/tonconnect/stateinit
- `method_name`: postStateInit
- `description`: Get account info by state init <br />
=

## Wallet
- `path`: /v2/wallet/backup
- `method_name`: getBackup
- `description`: Get backup info <br />
=
- `path`: /v2/wallet/backup
- `method_name`: putBackup
- `description`: Set backup info <br />
=
- `path`: /v2/wallet/auth/proof
- `method_name`: postAuthProof
- `description`: Account verification and token issuance <br />
=
- `path`: /v2/pubkeys/{public_key}/wallets
- `method_name`: getWallets
- `description`: Get wallets by public key <br />
=
- `path`: /v2/wallet/{account_id}/seqno
- `method_name`: getAccountSeqno
- `description`: Get account seqno <br />
=

## Lite Server
- `path`: /v2/liteserver/get_masterchain_info
- `method_name`: getMasterchainInfo
- `description`: Get raw masterchain info <br />
= 
- `path`: /v2/liteserver/get_masterchain_info_ext
- `method_name`: getMasterchainInfoExt
- `description`: Get raw masterchain info ext <br />
=
- `path`: /v2/liteserver/get_time
- `method_name`: getRawTime
- `description`: Get raw time <br />
=
- `path`: /v2/liteserver/get_block/{block_id}
- `method_name`: getRawBlockchainBlock
- `description`: Get raw blockchain block <br />
=
- `path`: /v2/liteserver/get_state/{block_id}
- `method_name`: getRawBlockchainBlockState
- `description`: Get raw blockchain block state <br />
=
- `path`: Get raw blockchain block state
- `method_name`: getBlockHeader
- `description`: Get raw blockchain block header <br />
=
- `path`: /v2/liteserver/send_message
- `method_name`: postSendMessage
- `description`: Send raw message to blockchain <br />
=
- `path`: /v2/liteserver/get_account_state/{account_id}
- `method_name`: getAccountState
- `description`: Get raw account state <br />
=
- `path`: /v2/liteserver/get_shard_info/{block_id}
- `method_name`: getShardInfo
- `description`: Get raw shard info <br />
=
- `path`: /v2/liteserver/get_all_shards_info/{block_id}
- `method_name`: getAllShardsInfo
- `description`: Get all raw shards info <br />
=
- `path`: /v2/liteserver/get_transactions/{account_id}
- `method_name`: getRawTransactions
- `description`: Get raw transactions <br />
=
- `path`: /v2/liteserver/list_block_transactions/{block_id}
- `method_name`: getListBlockTransactions
- `description`: Get raw list block transactions <br />
=
- `path`: /v2/liteserver/get_block_proof
- `method_name`: getBlockProof
- `description`: Get raw block proof <br />
=
- `path`: /v2/liteserver/get_config_all/{block_id}
- `method_name`: getConfigAll
- `description`: Get raw config <br />
=
- `path`: Get raw config
- `method_name`: getShardBlockProof
- `description`: Get raw shard block proof <br />
=
