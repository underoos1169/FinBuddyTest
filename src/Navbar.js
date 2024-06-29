import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  return(
    <nav className = "navbar">
      <h1>FinBuddy</h1>
      <div className={`ham-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`Links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Expenses</button>
          <div className="dropdown-content">
            <Link to="/add-expense" onClick={toggleMenu}>Add Expense</Link>
            <Link to="/expense-list" onClick={toggleMenu}>Check Expenses</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;