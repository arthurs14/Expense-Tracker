import { useEffect } from 'react';
import { useGlobal } from '../context/GlobalState';

import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useGlobal();

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        }
      </ul>
    </>
  );
};

export default TransactionList;
