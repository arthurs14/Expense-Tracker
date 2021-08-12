import { createContext, useReducer, useContext } from 'react';
import Reducer from './Reducer';
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// URL
const url = '/api/v1/transactions';

// Create context
const GlobalContext = createContext(initialState);
export const useGlobal = () => useContext(GlobalContext);

// Provider Component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // Actions
  const getTransactions = async () => {
    try {
      const res = await axios.get(url);

      const data = res.data.data.reverse();

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    try {
      const res = await axios.post(url, transaction, config);
      
      dispatch({ 
        type: 'ADD_TRANSACTION', 
        payload: res.data.data 
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);

      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const value = {
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    addTransaction,
    deleteTransaction,
    getTransactions,
  };

  return (
    <GlobalContext.Provider value={value}>
      { children }
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;