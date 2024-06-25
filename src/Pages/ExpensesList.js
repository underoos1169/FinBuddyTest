import React, {useEffect,useState} from "react";
import './ExpensesList.css';

const ExpensesList = () =>
{
    const [expenses, setExpenses] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');

    useEffect(() => {
      const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
      setExpenses(storedExpenses);
    }, []);

    const handleDelete = (index) => {
      const updatedExpenses = expenses.filter((_, i) => i!== index);
      setExpenses(updatedExpenses);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
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
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{expense.desc}</td>
                  <td className="buttoncell">
                    <button onClick={() => handleDelete(index)}>Delete Expense</button>
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