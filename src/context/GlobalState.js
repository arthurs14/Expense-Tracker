import { createContext, useReducer, useContext } from 'react';
import Reducer from './Reducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ],
};

// Create context
const GlobalContext = createContext(initialState);
export const useGlobal = () => useContext(GlobalContext);

// Provider Component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // Actions
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