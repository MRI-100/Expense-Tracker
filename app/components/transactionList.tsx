// import type { TransactionListProps } from "~/types/transaction"



// export const TransactionList = ({transactions, onDelete} : TransactionListProps) => {
//     if (transactions.length === 0) {
//         return (
//             <div className="text-gray-500 text-sm">
//                 No transactions yet.
//             </div>
//         )
//     }
//     return (
//         <ul>
//             {transactions.map((t) => (
//                 <li key = {t.id}>
//                     {t.description} - {t.amount} ({t.type})
//                     <button onClick={() => onDelete (t.id)}>Delete</button>    
//                 </li>
//             ))}
//         </ul>
//     )
// } 


import type { TransactionListProps } from "~/types/transaction";

export const TransactionList = ({ transactions, onDelete }: TransactionListProps) => {
  if (transactions.length === 0) {
    return (
      <div className="text-gray-500 text-sm italic text-center py-6">
        No transactions yet.
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {transactions.map((t) => (
        <li
          key={t.id}
          className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
        >
          {/* Left side: transaction info */}
          <div>
            <p className="font-medium text-gray-800">{t.description}</p>
            <p className="text-xs text-gray-500">
              {t.date} • {t.category}
            </p>
          </div>

          {/* Right side: amount + delete */}
          <div className="flex items-center gap-3">
            <span
              className={`font-semibold ${
                t.type === "income" ? "text-green-600" : "text-red-500"
              }`}
            >
              {t.type === "income" ? "+" : "-"} ₹{t.amount.toFixed(2)}
            </span>
            <button
              onClick={() => onDelete(t.id)}
              className="px-3 py-1 text-sm rounded-lg bg-gray-100 hover:bg-red-100 hover:text-red-600 transition"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
