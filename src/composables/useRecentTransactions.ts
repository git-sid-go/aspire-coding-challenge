import { TransactionIcons } from "@/assets/assets";

export const RECENT_TRANSACTIONS = [
  {
    name: "Hamleys",
    amount: "+ S$ 150",
    type: "credit",
    date: "20 May 2020",
    transactionType: "Refund on debit card",
    icon: TransactionIcons.box,
    color: "bg-transaction-blue",
  },
  {
    name: "Hamleys",
    amount: "- S$ 150",
    type: "debit",
    date: "20 May 2020",
    transactionType: "Charged to debit card",
    icon: TransactionIcons.travel,
    color: "bg-transaction-green",
  },
  {
    name: "Hamleys",
    amount: "- S$ 150",
    type: "debit",
    date: "20 May 2020",
    transactionType: "Charged to debit card",
    icon: TransactionIcons.alert,
    color: "bg-transaction-red",
  },
  {
    name: "Hamleys",
    amount: "- S$ 150",
    type: "debit",
    date: "20 May 2020",
    transactionType: "Charged to debit card",
    icon: TransactionIcons.box,
    color: "bg-transaction-blue",
  },
];
