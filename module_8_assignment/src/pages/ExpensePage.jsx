import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import BalanceSummary from "../components/BalanceSummary";

const ExpensePage = () => {
  const [expenseTransactions, setExpenseTransactions] = useState([]);

  const handleAddExpense = (newExpenseTransaction) => {
    setExpenseTransactions([...expenseTransactions, newExpenseTransaction]);
  };

  return (
    <div>
      <BalanceSummary
        incomeTransactions={[]}
        expenseTransactions={expenseTransactions}
      />
      <ExpenseForm onAddExpense={handleAddExpense} />
    </div>
  );
};

export default ExpensePage;
