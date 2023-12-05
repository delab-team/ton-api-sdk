import { Method } from "../common";

export interface GetAccountInspectDto {
  code: string;
  code_hash: string;
  methods: Method[];
  compiler: string;
}
