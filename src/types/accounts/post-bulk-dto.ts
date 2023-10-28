export interface PostBulkDto {
  accounts: Account[]
}

export interface Account {
  address: string
  balance: number
  last_activity: number
  status: string
  interfaces: any[]
  get_methods: any[]
  is_wallet: boolean
}
