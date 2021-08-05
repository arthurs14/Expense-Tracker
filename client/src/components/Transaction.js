import { useGlobal } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useGlobal();
  const { _id, text, amount } = transaction;

  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionIndicator = transaction.amount < 0 ? 'minus' : 'plus'

  return (
    <li className={transactionIndicator}>
      {text} <span>{`${sign}$${Math.abs(amount)}`}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(_id)}>x</button>
    </li>
  );
};

export default Transaction;

