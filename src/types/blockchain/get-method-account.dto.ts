export interface GetMethodAccountType {
  success: boolean
  exit_code: number
  stack: Stack[]
  decoded: string
}

interface Stack {
  type: string
  cell: string
  slice: string
  num: string
  tuple: any[]
}
