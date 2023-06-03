import React from 'react';
import './App.css';
import food from './Icon/food.png';
import tea from './Icon/tea.png';


const App = () => {






  return (
    <div className="App">
      <fieldset>
        <legend>Order Details</legend>
      <div className="leftColumn">
        <p>Order is empty! <br />
        Please add some items!</p>
      </div>
        </fieldset>

      <fieldset>
        <legend>Add items</legend>
        <div className="rightColumn">
          <button className="ButtonChangeMenu">
            <div className="item">
              <img className="Img" src={food} alt="food" />
              <div className= "NameMenu">
                Hamburger
                <p className="Price">Price: </p>
              </div>
            </div>
          </button>
          <button className="ButtonChangeMenu">
          <div className="item">
            <img className="Img" src={tea} alt="tea" />
            <div className= "NameMenu">
              Coffee
              <p className="Price">Price: </p>
            </div>
          </div>
          </button>
          <button className="ButtonChangeMenu">
          <div className="item">
            <img className="Img" src={food} alt="food" />
            <div className= "NameMenu">
              Cheeseburger
              <p className="Price">Price: </p>
            </div>
          </div>
          </button>
          <button className="ButtonChangeMenu">
          <div className="item">
            <img className="Img" src={tea} alt="tea" />
            <div className= "NameMenu">
              Tea
              <p className="Price">Price: </p>
            </div>
          </div>
          </button>
          <button className="ButtonChangeMenu">
          <div className="item">
            <img className="Img" src={food} alt="food" />
            <div className= "NameMenu">
              Fries
              <p className="Price">Price: </p>
            </div>
          </div>
          </button>
          <button className="ButtonChangeMenu">
          <div className="item">
            <img className="Img" src={tea} alt="tea" />
            <div className= "NameMenu">
              Cola
              <p className="Price">Price: </p>
            </div>
          </div>
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default App;
