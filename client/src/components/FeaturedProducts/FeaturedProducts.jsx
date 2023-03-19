import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {

 const data = [
    {
      id: 1,
      title: 'A long Sleeve Shirt',
      isNew: true,
      oldPrice: 10,
      newPrice: 20,
      img: 'https://images.pexels.com/photos/5098976/pexels-photo-5098976.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' ,
      img2: 'https://images.pexels.com/photos/5707816/pexels-photo-5707816.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      id: 2,
      title: 'A short Sleeve Shirt',
      isNew: true,
      oldPrice: 10,
      newPrice: 20,
      img: 'https://images.pexels.com/photos/5098686/pexels-photo-5098686.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      id: 3,
      title: 'A short Sleeve short',
      isNew: true,
      oldPrice: 10,
      newPrice: 20,
      img: 'https://images.pexels.com/photos/6151193/pexels-photo-6151193.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
  ]
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
      
        { data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
