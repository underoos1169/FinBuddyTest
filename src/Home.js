import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import OsitaThemeGif from './Assets/osita-osita-iheme.gif';
import LinenTexture from './Assets/simple-smooth-fabric-textured-background.jpg';


const Home = () =>
{
  return (
    <div className="home">
      <div className="HeroSectionFlexContainer">
        <div className="LeftFlexItem">
          <h1>FinBuddy</h1>
          <h3>Don't lose a penny with your very own personalised expenses-tracking app</h3>
          <div className="buttonContainer">
            <Link to="/add-expense" className="homeButton">Add Expense</Link>
            <Link to="/expense-list" className="homeButton">Check Expenses</Link>
          </div>
        </div>
        <div className="RightFlexItem">
          <img src={OsitaThemeGif} alt="Osita Theme GIF" className="gif-image" style={{borderRadius: "30px"}}></img>
        </div>
      </div>
    </div>
  );
}

export default Home;