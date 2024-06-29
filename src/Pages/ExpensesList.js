import React, {useEffect,useState} from "react";
import './ExpensesList.css';

const ExpensesList = () =>
{
    const [expenses, setExpenses] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editExpense, setEditExpense] = useState({amount: '', category: '', desc: ''});

    useEffect(() => {
      const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
      setExpenses(storedExpenses);
    }, []);

    const handleDelete = (index) => {
      const updatedExpenses = expenses.filter((_, i) => i!== index);
      setExpenses(updatedExpenses);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const handleEdit = (index) =>{
      setEditIndex(index);
      setEditExpense(expenses[index]);
    };

    const handleChange = (e) =>{
      const {name,value} = e.target;
      setEditExpense((prev) => ({...prev, [name]: value}));
    };
    
    const handleSave = (index) => {
      const updatedExpenses = expenses.map((expenses,i) => 
      i==index? {...editExpense, ...editExpense, date: new Date().toLocaleString()} : editExpense);
      setExpenses(updatedExpenses);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setEditIndex(null);
    };

    const getTotalExpense =() =>{
      return expenses.reduce((total, expense) => total + parseFloat(expense.amount) , 0);
    };

    const filteredExpenses = filterCategory? expenses.filter(expense => expense.category === filterCategory): expenses;

    const handleCategoryChange = (e) => {
      setFilterCategory(e.target.value);
    };

    return(
        <div className="ExpensesList">
          <h2>Your expenses so far...</h2>
          <div className="filter">
            <label htmlFor="category-filter">Filter by category: </label>
            <select id="category-filter" value={filterCategory} onChange={handleCategoryChange}>
              <option value="">All</option>
              <option value="Education">Education</option>
              <option value="Food">Food</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Social">Social</option>
            </select>
          </div>
          <table className="expenses-table">
            <thead>
              <tr>  
                <th>Date</th>
                <th>Time</th>
                <th>Amount in Rupees</th>
                <th>Category of Expense</th>
                <th>Description of transaction</th>
              </tr>
            </thead>
            <tbody>

              {filteredExpenses.map((expense, index) => (
                <tr key={index}>
                  <td>{new Date(expense.date).toLocaleDateString()}</td>
                  <td>{new Date(expense.date).toLocaleTimeString()}</td>
                  <td>
                    {editIndex === index? (
                      <input 
                        type="number"
                        name="amount"
                        value={editExpense.amount}
                        onChange={handleChange}
                      />
                    ) : (
                      expense.amount
                    )}
                  </td>
                  <td>
                    {editIndex === index? (
                      <select
                        name="category"
                        value={editExpense.category}
                        onChange={handleChange}
                      >
                        <option value="">Select a category</option>
                        <option value="Education">Education</option>
                        <option value="Food">Food</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Social">Social</option>
                      </select>
                    ) : (
                      expense.category
                    )}
                  </td>
                  <td>
                    {editIndex === index?(
                      <input
                        type="text"
                        name="desc"
                        value={editExpense.desc}
                        onChange={handleChange}
                      />
                    ) : (
                      expense.desc
                    )}
                  </td>
                  <td className="buttoncell">
                    {editIndex === index?(
                      <>
                        <button onClick={() => handleSave(index)} className="SaveButton">Save</button>
                        <button onClick={() => setEditIndex(null)} className="CancelButton">Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(index)} className="EditButton">Edit Expense</button>
                        <button onClick={() => handleDelete(index)} className="DeleteButton">Delete Expense</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan="2" style={{color: 'green', fontWeight: 'bold', fontSize: '18px'}}>Total Expense</td>
                <td style={{fontWeight: 'bold', fontSize: '18px'}}>{getTotalExpense().toFixed(2)}</td>
                
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default ExpensesList;