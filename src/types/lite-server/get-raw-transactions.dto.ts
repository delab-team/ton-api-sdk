export interface GetRawTransactionsDto {
  ids: Id[]
  transactions: string
}

export interface Id {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}
