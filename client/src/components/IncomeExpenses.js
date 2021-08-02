import { useGlobal } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useGlobal();

  const amounts = transactions.map(transaction => transaction.amount);

  const incomeTotal = amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expenseTotal = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += Math.abs(item)), 0).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${incomeTotal}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expenseTotal}</p>
      </div>

    </div>
  );
};

export default IncomeExpenses;
