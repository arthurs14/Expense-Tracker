import { useState } from 'react';
import { useGlobal } from '../context/GlobalState';
import { TextField, Button } from '@material-ui/core';

const AddTransaction = () => {
  const { addTransaction } = useGlobal();

  const [formData, setFormData] = useState({
    text: '',
    amount: 0,
  });

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(formData);

    if (formData.text === '' || formData.amount === '0') {
      alert('Invalid Data');
    } else {
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
  }
  

  const onChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  let formButton = formData.text !== '' && formData.amount !== 0
    ? (
      <Button
        className="btn"
        variant="contained"
        onClick={onSubmit}
      >
        Add Transaction
      </Button>
    )
    : (
      <Button
        className="btn"
        variant="contained"
        disabled
        onClick={onSubmit}
      >
        Add Transaction
      </Button>
    )

  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <TextField
            label="Transaction"
            value={formData.text}
            type="text"
            name="text"
            fullWidth
            onChange={onChange}
            />
        </div>
        <div className="form-control">
          <TextField 
            label="Amount in USD"
            name="amount"
            type="number"
            fullWidth
            value={formData.amount}
            onChange={onChange}
          />
        </div>
        {formButton}
      </form>
    </>
  );
};

export default AddTransaction;
