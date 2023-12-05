import { Transaction } from "../common";

// Transactions Schema
export interface GetAccountTransactionsDto {
  transactions: Transaction[]
}