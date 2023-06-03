import React from 'react';

interface MenuItemProps {
  item: { name: string; price: number; icon: string };
  addItemToOrder: (item: { name: string; price: number; icon: string }) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, addItemToOrder }) => {
  const { name, price } = item;

  return (
    <button className="ButtonChangeMenu" onClick={() => addItemToOrder(item)}>
      <div className="item">
        <img className="Img" src={item.icon} alt={item.name} />
        <div className="NameMenu">
          {name}
          <p className="Price">Price: {price} KGS</p>
        </div>
      </div>
    </button>
  );
};

export default MenuItem;
