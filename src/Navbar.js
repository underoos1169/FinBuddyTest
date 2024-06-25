import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () =>
{
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setisDropDownOpen(!isDropDownOpen);
  }

  return(
    <nav className = "navbar">
      <h1>FinBuddy</h1>
      <div className="Links">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Expenses</button>
          <div className="dropdown-content">
            <Link to="/add-expense">Add Expense</Link>
            <Link to="/expense-list">Check Expenses</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;