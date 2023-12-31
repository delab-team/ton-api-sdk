export interface GetListBlockTransactionsDto {
  id: Id
  req_count: number
  incomplete: boolean
  ids: Id2[]
  proof: string
}

export interface Id {
  workchain: bigint
  shard: bigint
  seqno: bigint
  root_hash: string
  file_hash: string
}

export interface Id2 {
  mode: number
  account: string
  lt: number
  hash: string
}
