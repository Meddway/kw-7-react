import React, {useState} from 'react';
import './App.css';
import food from './Icon/food.png';
import tea from './Icon/tea.png';


interface MenuItem {
  name: string;
  price: number;
}

const App = () => {

  const [orderItems, setOrderItems] = useState<MenuItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addItemToOrder = (item: MenuItem) => {
    const updatedItems = [...orderItems, item];
    const updatedTotalPrice = totalPrice + item.price;
    setOrderItems(updatedItems);
    setTotalPrice(updatedTotalPrice);
  };

  const removeItemFromOrder = (item: MenuItem) => {
    const updatedItems = orderItems.filter((orderItem) => orderItem !== item);
    const updatedTotalPrice = totalPrice - item.price;
    setOrderItems(updatedItems);
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <div className="App">
      <fieldset>
        <legend>Order Details</legend>
        <div className="leftColumn">
          {orderItems.length === 0 ? (
            <p>Order is empty <br /> Please  add some items!</p>
          ) : (
            orderItems.map((item, index) => (
              <div key={index}>
                <p>{item.name} - Цена: {item.price} KGS</p>
                <button onClick={() => removeItemFromOrder(item)}>X</button>
              </div>
            ))
          )}
          {orderItems.length > 0 && <p> <b>Total price: {totalPrice} KGS</b></p>}
        </div>
        </fieldset>

      <fieldset>
        <legend>Add items</legend>
        <div className="rightColumn">
          <button className="ButtonChangeMenu" onClick={() => addItemToOrder({ name: 'Hamburger', price: 80 })}>
            <div className="item">
              <img className="Img" src={food} alt="food" />
              <div className= "NameMenu">
                Hamburger
                <p className="Price">Price: 80 KGS </p>
              </div>
            </div>
          </button>

          <button className="ButtonChangeMenu" onClick={() => addItemToOrder({ name: 'Coffee', price: 70 })}>
          <div className="item">
            <img className="Img" src={tea} alt="tea" />
            <div className= "NameMenu">
              Coffee
              <p className="Price">Price: 70 KGS </p>
            </div>
          </div>
          </button>

          <button className="ButtonChangeMenu" onClick={() => addItemToOrder({ name: 'Cheeseburger', price: 90 })}>
          <div className="item">
            <img className="Img" src={food} alt="food" />
            <div className= "NameMenu">
              Cheeseburger
              <p className="Price">Price: 90 KGS </p>
            </div>
          </div>
          </button>

          <button className="ButtonChangeMenu" onClick={() => addItemToOrder({ name: 'Tea', price: 50 })}>
          <div className="item">
            <img className="Img" src={tea} alt="tea" />
            <div className= "NameMenu">
              Tea
              <p className="Price">Price: 50 KGS </p>
            </div>
          </div>
          </button>

          <button className="ButtonChangeMenu" onClick={() => addItemToOrder({ name: 'Fries', price: 45 })}>
          <div className="item">
            <img className="Img" src={food} alt="food" />
            <div className= "NameMenu">
              Fries
              <p className="Price">Price: 45 KGS </p>
            </div>
          </div>
          </button>

          <button className="ButtonChangeMenu" onClick={() => addItemToOrder({ name: 'Cola', price: 40 })}>
          <div className="item">
            <img className="Img" src={tea} alt="tea" />
            <div className= "NameMenu">
              Cola
              <p className="Price">Price: 40 KGS </p>
            </div>
          </div>
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default App;
