import { useState } from "react";
import IncomeForm from "../components/IncomeForm";
import BalanceSummary from "../components/BalanceSummary";

const IncomePage = () => {
  const [incomeTransactions, setIncomeTransactions] = useState([]);

  const handleAddIncome = (newIncomeTransaction) => {
    setIncomeTransactions([...incomeTransactions, newIncomeTransaction]);
  };

  return (
    <div>
      <BalanceSummary
        incomeTransactions={incomeTransactions}
        expenseTransactions={[]}
      />
      <IncomeForm onAddIncome={handleAddIncome} />
    </div>
  );
};

export default IncomePage;
