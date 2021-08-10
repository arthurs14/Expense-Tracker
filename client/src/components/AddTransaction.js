import { useState } from 'react';
import { useGlobal } from '../context/GlobalState';
import { Button } from '@material-ui/core';

const AddTransaction = () => {
  const { addTransaction } = useGlobal();

  const [formData, setFormData] = useState({
    text: '',
    amount: 0,
  });

  const onSubmit = (ev) => {
    ev.preventDefault();

    const newTransaction = {
      text: formData.text,
      amount: parseInt(formData.amount),
    };

    addTransaction(newTransaction);

    setFormData({
      text: '',
      amount: 0,
    });
  }
  

  const onChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="item">Item</label>
          <input  
            type="text" 
            name="text" 
            value={formData.text} onChange={onChange} 
            placeholder="Enter Text..." 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input 
            type="number" 
            name="amount" 
            value={formData.amount} 
            onChange={onChange} 
            placeholder="Enter Amount..." 
          />
        </div>
        {/* <button className="btn">Add Transaction</button> */}
        <Button className="btn" variant="contained" onClick={onSubmit}>
          Add Transaction
        </Button>
      </form>
    </>
  );
};

export default AddTransaction;
