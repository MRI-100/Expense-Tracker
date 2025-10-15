export type Transaction = {
    id: string;
    date: string;
    amount: number;
    description: string;
    category: string;
    type: "income" | "expense";
};



export type TransactionSectionProps = {
    onAddTransaction: (transaction: Transaction) => void;
};



export type CategorySelectProps = {
  category: string;
  setCategory: (value: string) => void;
};



export type TransactionListProps = {
  transactions: Transaction [];
  onDelete: (id: string) => void;
};