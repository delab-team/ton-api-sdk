export interface GetHumanFriendlyInfoDto {
  address: string
  balance: number
  last_activity: number
  status: string
  interfaces: string[]
  name: string
  is_scam: boolean
  icon: string
  memo_required: boolean
  get_methods: string[]
  is_suspended: boolean
  is_wallet: boolean
}
