import React, { useState } from 'react';
import './App.css';
import AnotherHeader from './AnotherHeader'
import Button from 'react-bootstrap/Button';

const CartPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 150, quantity: 2 },
  ]);

  const updateQuantity = (id, quantity) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: Math.max(1, quantity) } : product
    ));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <>
    <AnotherHeader/>
    <div>
    <div className='total'>
    <div className="cart-page">
      
      <div className="cart-details">
        {products.map(product => (
          <div key={product.id} className="product-detail">
            <img src="https://www.beyours.in/cdn/shop/products/light-blue-classic-shirt-5.jpg?v=1715933855&width=1200" alt="" width={180} height={200}/>
            <div>
            <h2 className='mx-4'>Rare Rabit Men Printed Casual Shirt</h2>
        <div />
        <div className='d-flex flex-row mx-4 my-2'>
            <p className='my-1'>Price: ${product.price}</p>
            <p className='mx-4'>
              Quantity: 
              <input 
                type="number" 
                value={product.quantity} 
                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                min="1"
              />
              
            </p>
            </div>
            <p className='mx-4'>Total: ${product.price * product.quantity}</p>
            <Button variant="outline-secondary" onClick={() => removeProduct(product.id)} className='mx-4 my-2'>Remove</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="billing-info">
        <h2>Totel Price Detail</h2>
        <p>Total Amount:${calculateTotal()} </p>
        <Button variant="outline-secondary" onClick={() => alert('Proceed to Payment')} >BUYNOW</Button>
        </div>
        
      </div>
    </div>
    </div>
    </>
  );
};

export default CartPage;

