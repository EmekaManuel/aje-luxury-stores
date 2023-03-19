import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

  const data = [
    {
      id: 1,
      title: 'A long Sleeve Shirt',
      isNew: true,
      desc: "hello",
      oldPrice: 10,
      newPrice: 20,
      img: 'https://images.pexels.com/photos/5098976/pexels-photo-5098976.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' ,
      img2: 'https://images.pexels.com/photos/5707816/pexels-photo-5707816.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      id: 2,
      title: 'A short Sleeve Shirt',
      isNew: true,
      desc: "hello",
      oldPrice: 10,
      newPrice: 20,
      img: 'https://images.pexels.com/photos/5098686/pexels-photo-5098686.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      id: 3,
      title: 'A short Sleeve short',
      isNew: true,
      desc: "hello",
      oldPrice: 10,
      newPrice: 20,
      img: 'https://images.pexels.com/photos/6151193/pexels-photo-6151193.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
  ]
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${1000}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
