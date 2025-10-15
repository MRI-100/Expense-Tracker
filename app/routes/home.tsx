// import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navtitle } from "~/components/navtitle";
import { NetValueCard } from "~/components/netvaluecard";
import { TransactionSection } from "~/components/transactionsection";
import { useState } from "react";
import type { Transaction } from "~/types/transaction";
import type { Route } from "../+types/root";
import { TransactionList } from "~/components/transactionList";
// import type { Route } from "../+types/root";
// import type { Route } from ".react-router/types/app/routes/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Add new transaction
  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);

    console.log("Transactions after adding:", [...transactions, transaction]);
  }

  // Delete a transaction
  const handleDeleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // --- Calculate totals ---
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const netValue = totalIncome - totalExpenses;


  return (
    <div className="space-y-9">
      {/* <Welcome /> */}
      <Navtitle />
      <div className="w-full flex justify-between">
        <NetValueCard title="Total Income" value={totalIncome} description="All time" />
        <NetValueCard title="Total Expenses" value={totalExpenses} description="All time" />
        <NetValueCard title="Net" value={netValue} description="Income - Expenses" />
      </div>
      <TransactionSection onAddTransaction={handleAddTransaction} />
      {/* Show transaction list */}
      <TransactionList
        transactions={transactions}
        onDelete={handleDeleteTransaction}
      />
    </div>

  )


}
