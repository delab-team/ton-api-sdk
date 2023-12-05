// MethodExecutionResult

import { Stack } from "../common"

export interface GetMethodAccountDto {
  success: boolean
  exit_code: number
  stack: Stack[]
  decoded: any
}
