import React from 'react';
import MenuItem from './MenuItem';
import food from './Icon/food.png';
import tea from './Icon/tea.png';

interface AddItemsProps {
  addItemToOrder: (item: { name: string; price: number; icon: string }) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ addItemToOrder }) => {
  const menuItems = [
    { name: 'Hamburger', price: 80, icon: food },
    { name: 'Coffee', price: 70, icon: tea },
    { name: 'Cheeseburger', price: 90, icon: food },
    { name: 'Tea', price: 50, icon: tea },
    { name: 'Fries', price: 45, icon: food },
    { name: 'Cola', price: 40, icon: tea },
  ];

  return (
    <fieldset>
      <legend>Add items</legend>
      <div className="rightColumn">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} addItemToOrder={addItemToOrder} />
        ))}
      </div>
    </fieldset>
  );
};

export default AddItems;
