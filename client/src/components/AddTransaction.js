import { useState } from 'react';
import { useGlobal } from '../context/GlobalState';
import { TextField, Button, Typography, Divider } from '@material-ui/core';

const AddTransaction = () => {
  const { addTransaction } = useGlobal();

  const [formData, setFormData] = useState({
    text: '',
    amount: 0,
  });

  const onSubmit = (ev) => {
    ev.preventDefault();

    const validate = formValidate();

    if (validate) {
      const newTransaction = {
        text: formData.text,
        amount: parseInt(formData.amount),
      };
  
      addTransaction(newTransaction);
  
      setFormData({
        text: '',
        amount: 0,
      });
    } else {
      return;
    }
  }

  const formValidate = () => {
    let valid = true;

    if (formData.text === '' || formData.text.length < 2) {
      alert('Invalid Text.');
      valid = false;
    } else if (formData.amount === 0) {
      alert('Invalid Amount.');
      valid = false;
    }

    return valid;
  };
  

  const onChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <Typography variant="h6">Add New Transaction</Typography>
      <Divider />
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
        <Button
          className="btn"
          variant="contained"
          onClick={onSubmit}
        >
          Add Transaction
        </Button>
      </form>
    </>
  );
};

export default AddTransaction;
