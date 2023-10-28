export interface GetAccountInspectType {
  code: string
  code_hash: string
  methods: Method[]
  compiler: string
}

export interface Method {
  id: number
  method: string
}
