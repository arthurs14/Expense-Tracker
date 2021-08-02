import { useGlobal } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useGlobal();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transactions.map(transaction => (
            <li key={transaction.id} className="minus">
              {transaction.text} <span>{transaction.amount}</span><button className="delete-btn">x</button>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default TransactionList;
