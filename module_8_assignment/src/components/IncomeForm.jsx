import { useState } from "react";

const IncomeForm = ({ onAddIncome }) => {
  const [incomeDescription, setIncomeDescription] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    if (incomeDescription && incomeAmount) {
      const newIncomeTransaction = {
        id: Math.random().toString(36).substring(7),
        description: incomeDescription,
        amount: parseFloat(incomeAmount),
      };
      onAddIncome(newIncomeTransaction);
      setIncomeDescription("");
      setIncomeAmount("");
    }
  };

  return (
    <div>
      <h2>Income Page</h2>
      <form onSubmit={handleIncomeSubmit}>
        <div className="mb-3">
          <label htmlFor="income-description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            id="income-description"
            className="form-control"
            value={incomeDescription}
            onChange={(e) => setIncomeDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="income-amount" className="form-label">
            Amount:
          </label>
          <input
            type="number"
            id="income-amount"
            className="form-control"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Income
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;
