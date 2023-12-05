import { Transaction } from "../common";

// Transactions Schema
export interface GetTransactionsMessageDataDto {
  transactions: Transaction[]
}
