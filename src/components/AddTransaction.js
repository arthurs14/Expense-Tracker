import { useState } from 'react';

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    text: '',
    amount: 0,
  });

  const onChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  console.log(formData);

  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name="text" value={formData.text} onChange={onChange} placeholder="Enter Text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input type="number" name="amount" value={formData.amount} onChange={onChange} placeholder="Enter Amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
