import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ExpenseForm from './Pages/AddExpense';
import ExpensesList from './Pages/ExpensesList';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expense" element={<ExpenseForm />} />
          <Route path="/expense-list" element={<ExpensesList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
