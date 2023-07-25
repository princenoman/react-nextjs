const BalanceSummary = ({ incomeTransactions, expenseTransactions }) => {
  const getTotalIncome = () => {
    return incomeTransactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  const getTotalExpense = () => {
    return expenseTransactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  const getRemainingBalance = () => {
    return getTotalIncome() - getTotalExpense();
  };

  return (
    <div className="balance-summary">
      <h3>Balance Summary</h3>
      <p>Total Income: ${getTotalIncome().toFixed(2)}</p>
      <p>Total Expenses: ${getTotalExpense().toFixed(2)}</p>
      <p>Remaining Balance: ${getRemainingBalance().toFixed(2)}</p>
    </div>
  );
};

export default BalanceSummary;
