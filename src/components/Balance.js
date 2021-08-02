import { useGlobal } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useGlobal();

  const transactionList = transactions.map(transaction => transaction.amount);
  const total = transactionList.reduce((acc, item) => (acc += item), 0).toFixed(2); 

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;