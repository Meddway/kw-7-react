import React from 'react';

interface OrderDetailsProps {
  itemCount: { [itemName: string]: number };
  orderItems: { name: string; price: number }[];
  totalPrice: number;
  removeItemFromOrder: (itemName: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
                                                     itemCount,
                                                     orderItems,
                                                     totalPrice,
                                                     removeItemFromOrder,
                                                   }) => {
  return (
    <fieldset>
      <legend>Order Details</legend>
      <div className="leftColumn">
        {Object.entries(itemCount).map(([itemName, count]) => (
          <div key={itemName}>
            <p>
              {itemName} - Цена: {orderItems.find((item) => item.name === itemName)?.price} KGS
            </p>
            <p>Количество: <b>{count}</b></p>
            <button onClick={() => removeItemFromOrder(itemName)}>Удалить</button>
          </div>
        ))}
        {Object.keys(itemCount).length === 0 && <p>Order is empty! Please add some items!</p>}
        {Object.keys(itemCount).length > 0 && <p> <b>Total price: {totalPrice} KGS</b></p>}
      </div>
    </fieldset>
  );
};

export default OrderDetails;
