type NetValueCardProps = {
    title: string;
    value: number;
    description: string;
}



export const NetValueCard = ({ title, value, description }: NetValueCardProps) => {
    // Set colors based on title
    const isIncome = title.includes("Income");
    const isExpense = title.includes("Expenses");
    const isNet = title === "Net";

    const bgColor = isIncome
        ? "bg-green-100"
        : isExpense
            ? "bg-red-100"
            : "bg-blue-100";

    const textColor = isIncome
        ? "text-green-700"
        : isExpense
            ? "text-red-700"
            : "text-blue-700";

    const borderColor = isIncome
        ? "border-green-300"
        : isExpense
            ? "border-red-300"
            : "border-blue-300";

    return (
        <div className={`p-5 rounded-2xl border ${borderColor} ${bgColor} shadow-sm hover:shadow-md transition-all duration-200 w-1/4`}>
            <div className="flex flex-col justify-between h-full space-y-4">
                <div className="text-lg font-semibold text-gray-800">{title}</div>
                <div>
                    <div className={`text-3xl font-bold ${textColor} transition-transform duration-300 ease-out transform hover:scale-105`}>
                        ${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-gray-500">{description}</div>
                </div>
            </div>

        </div>
    )
}