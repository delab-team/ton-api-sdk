import { Bounceable, NonBounceable } from "../common"

export interface GetParseAddressDto {
  raw_form: string
  bounceable: Bounceable
  non_bounceable: NonBounceable
  given_type: string
  test_only: boolean
}