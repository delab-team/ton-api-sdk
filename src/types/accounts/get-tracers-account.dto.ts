export interface GetTracersAccountDto {
  traces: Trace[]
}

export interface Trace {
  id: string
  utime: number
}
