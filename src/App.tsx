import React, { useState } from 'react';
import './App.css';
import OrderDetails from './Components/OrderDetails';
import AddItems from './Components/AddItems';

interface MenuItem {
  name: string;
  price: number;
  icon: string;
}

const App = () => {
  const [orderItems, setOrderItems] = useState<MenuItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [itemCount, setItemCount] = useState<{ [key: string]: number }>({});

  const addItemToOrder = (item: MenuItem) => {
    const updatedTotalPrice = totalPrice + item.price;
    setTotalPrice(updatedTotalPrice);
    setItemCount((prevItemCount) => ({
      ...prevItemCount,
      [item.name]: (prevItemCount[item.name] || 0) + 1,
    }));
    setOrderItems((prevOrderItems) => [...prevOrderItems, item]);
  };

  const removeItemFromOrder = (itemName: string) => {
    const itemsToRemove = orderItems.filter((item) => item.name === itemName);
    const updatedOrderItems = orderItems.filter((item) => item.name !== itemName);
    const updatedTotalPrice = totalPrice - itemsToRemove.reduce((total, item) => total + item.price, 0);
    const updatedItemCount = { ...itemCount };
    delete updatedItemCount[itemName];
    setOrderItems(updatedOrderItems);
    setTotalPrice(updatedTotalPrice);
    setItemCount(updatedItemCount);
  };

  return (
    <div className="App">
      <OrderDetails
        itemCount={itemCount}
        orderItems={orderItems}
        totalPrice={totalPrice}
        removeItemFromOrder={removeItemFromOrder}
      />
      <AddItems addItemToOrder={addItemToOrder} />
    </div>
  );
};

export default App;
