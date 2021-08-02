const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionIndicator = transaction.amount < 0 ? 'minus' : 'plus'

  return (
    <li className={transactionIndicator}>
      {transaction.text} <span>{`${sign}$${Math.abs(transaction.amount)}`}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;

