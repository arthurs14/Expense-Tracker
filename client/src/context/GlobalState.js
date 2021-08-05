import { createContext, useReducer, useContext } from 'react';
import Reducer from './Reducer';
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
const GlobalContext = createContext(initialState);
export const useGlobal = () => useContext(GlobalContext);

// Provider Component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // Actions
  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions');
      console.log('[getTransactions]', res);

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const value = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };

  return (
    <GlobalContext.Provider value={value}>
      { children }
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;