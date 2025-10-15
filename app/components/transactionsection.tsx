// // import DropDownCustom from "./dropdowncustom"

// import { useState } from "react"
// import { CategorySelect } from "./dropdowncustom"
// import type { Transaction, TransactionSectionProps } from "~/types/transaction"
// import { toast } from "sonner"


// export const TransactionSection = ({ onAddTransaction }: TransactionSectionProps) => {

//     const [date, setDate] = useState("")
//     const [amount, setAmount] = useState<number | "">("");
//     const [description, setDescription] = useState("");
//     const [category, setCategory] = useState("Food & Dining");
//     const [type, setType] = useState<"expense" | "income">("expense");


//     const handleSubmit = () => {
//         if (!date || !amount || !description) {
//             toast.error("Please fill all fields before adding!");
//             return;
//         }

//         const NewTransaction: Transaction = {
//             id: crypto.randomUUID(),
//             date,
//             amount: Number(amount),
//             description,
//             category,
//             type,
//         };

//         console.log(NewTransaction)
//         onAddTransaction(NewTransaction);
//         toast.success(`${type === "expense" ? "Expense" : "Income"} added! ✅`);


//         setDate("");
//         setAmount("");
//         setDescription("");
//         setCategory("");
//         setType("expense");
//     };

//     return (
//         <div className="space-y-7">
//             <div>Add New Transaction</div>

//             <div className="w-full flex ">
//                 <div
//                     onClick={() => setType("expense")}
//                     className={`w-1/2  text-center p-3 rounded-l-xl cursor-pointer ${type === "expense" ? "bg-red-500 text-white" : "bg-gray-200"}`}
//                 >
//                     Expense
//                 </div>
//                 <div
//                     onClick={() => setType("income")}
//                     className={`w-1/2 text-center p-3 rounded-r-xl ${type === "income" ? "bg-green-500 text-white" : "bg-gray-200"}`}
//                 >
//                     Income
//                 </div>
//             </div>

//             <div className="w-full flex gap-5">
//                 <div className="w-1/2 space-y-2">
//                     <div>Date</div>
//                     <input
//                         type="date"
//                         value={date}
//                         name=""
//                         id=""
//                         onChange={(e) => setDate(e.target.value)}
//                         className="pl-4 py-3 border border-gray-200 w-full rounded-xl"
//                     />
//                 </div>
//                 <div className="w-1/2 space-y-2">
//                     <div>Amount</div>
//                     <input
//                         type="number"
//                         placeholder="$ 0.00"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         className="pl-4 py-3 border border-gray-200 w-full rounded-xl" />
//                 </div>
//             </div>
//             <div className="w-full space-y-2">
//                 <div>Description</div>
//                 <input
//                     type="text"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Enter transaction description"
//                     name=""
//                     id=""
//                     className="pl-4 py-3 border border-gray-200 w-full rounded-xl"
//                 />
//             </div>
//             <div className="">
//                 {/* <DropDownCustom /> */}
//                 <CategorySelect category={category} setCategory={setCategory} />
//             </div>
//             <div
//                 onClick={handleSubmit}
//                 className={`text-center rounded-xl p-3 cursor-pointer ${type === "expense" ? "bg-red-500" : "bg-green-500"}`}
//             >
//                 Add {type === "expense" ? "Expense" : "Income"}
//             </div>
//         </div>
//     )
// }


// import { useState } from "react";
// import { CategorySelect } from "./dropdowncustom";
// import type { Transaction, TransactionSectionProps } from "~/types/transaction";
// import { toast } from "sonner";

// export const TransactionSection = ({ onAddTransaction }: TransactionSectionProps) => {
//   const [date, setDate] = useState("");
//   const [amount, setAmount] = useState(""); // keep as string
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Food & Dining"); // default
//   const [type, setType] = useState<"expense" | "income">("expense");

//   const handleSubmit = () => {
//     if (!date || !amount || !description) {
//       toast.error("Please fill all fields before adding!");
//       return;
//     }

//     const NewTransaction: Transaction = {
//       id: crypto.randomUUID(),
//       date,
//       amount: parseFloat(amount), // convert here
//       description,
//       category,
//       type,
//     };

//     console.log(NewTransaction);
//     onAddTransaction(NewTransaction);
//     toast.success(`${type === "expense" ? "Expense" : "Income"} added! ✅`);

//     // Reset fields
//     setDate("");
//     setAmount("");
//     setDescription("");
//     setCategory("Food & Dining");
//     setType("expense");
//   };

//   return (
//     <div className="space-y-7">
//       <div>Add New Transaction</div>

//       {/* Type selector */}
//       <div className="w-full flex">
//         <div
//           onClick={() => setType("expense")}
//           className={`w-1/2 text-center p-3 rounded-l-xl cursor-pointer ${
//             type === "expense" ? "bg-red-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Expense
//         </div>
//         <div
//           onClick={() => setType("income")}
//           className={`w-1/2 text-center p-3 rounded-r-xl cursor-pointer ${
//             type === "income" ? "bg-green-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Income
//         </div>
//       </div>

//       {/* Date & Amount */}
//       <div className="w-full flex gap-5">
//         <div className="w-1/2 space-y-2">
//           <div>Date</div>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="pl-4 py-3 border border-gray-200 w-full rounded-xl"
//           />
//         </div>
//         <div className="w-1/2 space-y-2">
//           <div>Amount</div>
//           <input
//             type="text" // text instead of number
//             inputMode="decimal"
//             pattern="[0-9]*\.?[0-9]*"
//             placeholder="0.00"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="pl-4 py-3 border border-gray-200 w-full rounded-xl"
//           />
//         </div>
//       </div>

//       {/* Description */}
//       <div className="w-full space-y-2">
//         <div>Description</div>
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Enter transaction description"
//           className="pl-4 py-3 border border-gray-200 w-full rounded-xl"
//         />
//       </div>

//       {/* Category */}
//       <div>
//         <CategorySelect category={category} setCategory={setCategory} type={type} />
//       </div>

//       {/* Submit button */}
//       <div
//         onClick={handleSubmit}
//         className={`text-center rounded-xl p-3 cursor-pointer ${
//           type === "expense" ? "bg-red-500" : "bg-green-500"
//         }`}
//       >
//         Add {type === "expense" ? "Expense" : "Income"}
//       </div>
//     </div>
//   );
// };



import { useState } from "react";
import { CategorySelect } from "./dropdowncustom";
import type { Transaction, TransactionSectionProps } from "~/types/transaction";
import { toast } from "sonner";

export const TransactionSection = ({ onAddTransaction }: TransactionSectionProps) => {
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState(""); // string for input
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Food & Dining"); // default expense category
    const [type, setType] = useState<"expense" | "income">("expense");

    const handleSubmit = () => {
        if (!date || !amount || !description) {
            toast.error("Please fill all fields before adding!");
            return;
        }

        const NewTransaction: Transaction = {
            id: crypto.randomUUID(),
            date,
            amount: parseFloat(amount),
            description,
            category,
            type,
        };

        onAddTransaction(NewTransaction);
        toast.success(`${type === "expense" ? "Expense" : "Income"} added! ✅`);

        // Reset fields
        setDate("");
        setAmount("");
        setDescription("");
        setType("expense");
        setCategory("Food & Dining"); // reset based on type after forcing expense

    };

    return (
        <div className="space-y-7">
            <div>Add New Transaction</div>

            {/* Type selector */}
            <div className="w-full flex">
                <div
                    onClick={() => {
                        setType("expense");
                        setCategory("Food & Dining"); // reset category on switch
                    }}
                    className={`w-1/2 text-center p-3 rounded-l-xl cursor-pointer ${type === "expense" ? "bg-red-500 text-white" : "bg-gray-200"
                        }`}
                >
                    Expense
                </div>
                <div
                    onClick={() => {
                        setType("income");
                        setCategory("Salary"); // reset category on switch
                    }}
                    className={`w-1/2 text-center p-3 rounded-r-xl cursor-pointer ${type === "income" ? "bg-green-500 text-white" : "bg-gray-200"
                        }`}
                >
                    Income
                </div>
            </div>

            {/* Date & Amount */}
            <div className="w-full flex gap-5">
                <div className="w-1/2 space-y-2">
                    <label htmlFor="dateInput" className="block font-medium cursor-pointer">
                        Date
                    </label>
                    <input
                        id="dateInput"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        onClick={(e) => (e.currentTarget as HTMLInputElement).showPicker?.()}
                        className="px-4 py-3 border border-gray-200 w-full rounded-xl cursor-pointer"
                    />
                </div>
                <div className="w-1/2 space-y-2">
                    <div>Amount</div>
                    <input
                        type="text"
                        inputMode="decimal"
                        pattern="[0-9]*\.?[0-9]*"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className={`pl-4 py-3 border border-gray-200 w-full rounded-xl ${type === "expense" ? "text-red-500" : "text-green-500"
                            }`}
                    />
                </div>
            </div>

            {/* Description */}
            <div className="w-full space-y-2">
                <div>Description</div>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter transaction description"
                    className="pl-4 py-3 border border-gray-200 w-full rounded-xl"
                />
            </div>

            {/* Category */}
            <div>
                <CategorySelect category={category} setCategory={setCategory} type={type} />
            </div>

            {/* Submit button */}
            <div
                onClick={handleSubmit}
                className={`text-center text-white rounded-xl p-3 cursor-pointer ${type === "expense" ? "bg-red-500" : "bg-green-500"
                    }`}
            >
                Add {type === "expense" ? "Expense" : "Income"}
            </div>
        </div>
    );
};
