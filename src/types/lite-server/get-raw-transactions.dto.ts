export interface GetRawTransactionsDto {
  ids: Id[]
  transactions: string
}

export interface Id {
  workchain: number
  shard: number
  seqno: number
  root_hash: string
  file_hash: string
}
