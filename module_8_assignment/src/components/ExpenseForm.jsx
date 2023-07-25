import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (expenseDescription && expenseAmount) {
      const newExpenseTransaction = {
        id: Math.random().toString(36).substring(7),
        description: expenseDescription,
        amount: parseFloat(expenseAmount),
      };
      onAddExpense(newExpenseTransaction);
      setExpenseDescription("");
      setExpenseAmount("");
    }
  };

  return (
    <div>
      <h2>Expense Page</h2>
      <form onSubmit={handleExpenseSubmit}>
        <div className="mb-3">
          <label htmlFor="expense-description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            id="expense-description"
            className="form-control"
            value={expenseDescription}
            onChange={(e) => setExpenseDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expense-amount" className="form-label">
            Amount:
          </label>
          <input
            type="number"
            id="expense-amount"
            className="form-control"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
