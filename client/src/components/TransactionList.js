import { useEffect } from 'react';
import { useGlobal } from '../context/GlobalState';
import { Typography, Divider } from '@material-ui/core';

import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useGlobal();

  useEffect(() => {
    getTransactions();
    // prevents unending loop for mounting
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Typography variant="h6">History</Typography>
      <Divider />
      <ul className="list">
        {
          transactions.map(transaction => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))
        }
      </ul>
    </>
  );
};

export default TransactionList;
