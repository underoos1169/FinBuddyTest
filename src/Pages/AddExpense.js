import React, { useState } from "react";
import './AddExpense.css';

function ExpenseForm() 
{
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseDetails ={
      amount,
      desc,
      category,
      date: new Date().toISOString(),  //Get date and time info
    };

    const existingExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    existingExpenses.push(expenseDetails);
    localStorage.setItem('expenses', JSON.stringify(existingExpenses));

    console.log("Expense Details: ", expenseDetails);

    //Reset form after submissions
    setAmount('');
    setDesc('');
    setCategory('');
  }

  return (
    <div className="ExpenseForm">
      <div className="ExpenseFormTitle">Add Expense</div>
      <form className="AddExpenseForm" onSubmit={handleSubmit} style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: '15px' }}>
        <div className="Amount-Input">
          <label htmlFor="Amount">Amount: </label>
          <input
            type="number"
            id="Amount"
            name="Amount"
            style={{ borderRadius: '3px', fontSize: '15px', padding: '2px' }}
            min="1" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            max="999999"
            required
          />
        </div>
        <div className="Catergory-Input">
          <label htmlFor="Category">Category: </label>
          <select 
            id="Category"
            name="Category"
            style={{borderRadius: '3px', fontSize: '15px', padding: '2px'}}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Education">Education</option>
            <option value="Food">Food</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Social">Social</option>
          </select>
        </div>
        <div className="Description-Input">
          <label htmlFor="Description">Description: </label>
          <input
            type="text"
            id="Description"
            name="Description"
            style={{ borderRadius: '3px', fontSize: '15px', padding: '2px' }}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <input
            type="reset"
            name="reset"
            id="reset"
            style={{ padding: '3px', fontSize: '15px', fontWeight: 'bold' , cursor: 'pointer'}}
            onClick={() => {
              setAmount('');
              setCategory('');
              setDesc('');
            }}
          />
        </div>
        <div>
          <input
            type="submit"
            name="submit"
            id="submit"
            style={{ padding: '8px', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' , cursor: 'pointer'}}
            disabled={!amount || !category}
          />
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
