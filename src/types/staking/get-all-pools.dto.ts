export interface GetAllPoolsDto {
  pools: Pool[]
}

export interface Pool {
  pool: string
  amount: number
  pending_deposit: number
  pending_withdraw: number
  ready_withdraw: number
}
