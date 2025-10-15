// import { useState } from "react";

// import type { CategorySelectProps } from "~/types/transaction"

// export default function DropDownCustom() {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState("");

//   const categories = [
//     "Food & Dining",
//     "Transportation",
//     "Shopping",
//     "Entertainment",
//     "Bills & Utilities",
//     "Healthcare",
//     "Education",
//     "Travel",
//     "Insurance",
//     "Other Expense",
//   ];

//   return (
//     <div className="">
//       <label className="block mb-2 font-medium">Category</label>
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center border px-4 py-2 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         {selected || "Select a category"}
//         <span className="ml-2">▼</span>
//       </button>

//       {open && (
//         <ul className="mt-2 border rounded-lg bg-white shadow-lg z-10 max-h-60 overflow-y-auto">
//           {categories.map((option, index) => (
//             <li
//               key={index}
//               onClick={() => {
//                 setSelected(option);
//                 setOpen(false);
//               }}
//               className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// export const CategorySelect = ({category, setCategory} : CategorySelectProps) => {
//   return (
//     <div className="space-y-2">
//       <label className="block">Category</label>
//       <select
//         value={category} 
//         onChange={(e) => setCategory(e.target.value)}
//         name="" 
//         id="" 
//         className="w-full pl-4 py-3 rounded-xl border border-gray-200 focus:border-2 focus:border-blue-500 "
//       >
//         <option defaultValue="Select a Category">Select a Category</option>
//         <option value="">Food & Dining</option>
//         <option value="">Transportation</option>
//         <option value="">Shopping </option>
//         <option value="">Entertainment</option>
//         <option value="">Bills & Utilities</option>
//         <option value="">Healthcare</option>
//         <option value="">Education</option>
//         <option value="">Travel</option>
//         <option value="">Insurance</option>
//         <option value="">Other Expense</option>
//       </select>

//     </div>
//   )
// }



// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "app/components/ui/select";

// import type { CategorySelectProps } from "~/types/transaction";

// export const CategorySelect = ({ category, setCategory }: CategorySelectProps) => {
//   return (
//     <div className="space-y-2">
//       <label className="block text-sm font-medium">Category</label>
//       <Select value={category} onValueChange={setCategory}>
//         <SelectTrigger className="w-full py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500">
//           <SelectValue placeholder="Select a Category" />
//         </SelectTrigger>
//         <SelectContent className="z-50 max-h-60 overflow-y-auto scroll-smooth" position="popper">
//           <SelectItem value="Food & Dining">Food & Dining</SelectItem>
//           <SelectItem value="Transportation">Transportation</SelectItem>
//           <SelectItem value="Shopping">Shopping</SelectItem>
//           <SelectItem value="Entertainment">Entertainment</SelectItem>
//           <SelectItem value="Bills & Utilities">Bills & Utilities</SelectItem>
//           <SelectItem value="Healthcare">Healthcare</SelectItem>
//           <SelectItem value="Education">Education</SelectItem>
//           <SelectItem value="Travel">Travel</SelectItem>
//           <SelectItem value="Insurance">Insurance</SelectItem>
//           <SelectItem value="Other Expense">Other Expense</SelectItem>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "app/components/ui/select";

import type { CategorySelectProps } from "~/types/transaction";

const incomeCategories = [
  "Salary",
  "Business",
  "Investment",
  "Gifts",
  "Interest",
  "Rental Income",
  "Other",
];

const expenseCategories = [
  "Food & Dining",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Bills & Utilities",
  "Healthcare",
  "Education",
  "Travel",
  "Insurance",
  "Other Expense",
];

export const CategorySelect = ({ category, setCategory, type }: CategorySelectProps & { type: "income" | "expense" }) => {
  const categories = type === "income" ? incomeCategories : expenseCategories;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Category</label>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full pl-4 py-6 text-base cursor-pointer rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500">
          <SelectValue placeholder="Select a Category" />
        </SelectTrigger>
        <SelectContent className="z-50 max-h-60 overflow-y-auto scroll-smooth" position="popper">
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
