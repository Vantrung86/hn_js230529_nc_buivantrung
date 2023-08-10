import React from "react";

function CartModal({cartProduct, updateQuantity, handleDeleteCart, totalMoney}) {
  return (
    <div className="box-all">
      <div className="table_list">
        <div className="table_list-container">
          <div>
            <h2>List products</h2>
          </div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

            {cartProduct.map((e, i) => (
      
              <tr className="style-table" key={i}>
                <td>{i+1}</td>
                <td>{e.title}</td>
                <td>
                  <img
                    src={e.image}
                    alt=""
                  />
                </td>
                <td>
                    <button onClick={() => updateQuantity(e.id, e.quantity - 1)}>-</button>
                    {e.quantity}
                    <button onClick={() => updateQuantity(e.id, e.quantity + 1)}>+</button>
                </td>
                <td>{e.price}</td>
                <td>{(e.quantity)*(e.price)}</td>
                <td>
                 
                  <button className="btn-denger"  onClick={() => handleDeleteCart(e.id)}>Delete</button>
                </td>
              </tr>
            ))};
            </tbody>
          </table>
          <h3>Tổng tiền: {totalMoney}$</h3>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
