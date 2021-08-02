import { useGlobal } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useGlobal();
  const { id, text, amount } = transaction;

  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionIndicator = transaction.amount < 0 ? 'minus' : 'plus'

  return (
    <li className={transactionIndicator}>
      {text} <span>{`${sign}$${Math.abs(amount)}`}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
    </li>
  );
};

export default Transaction;

