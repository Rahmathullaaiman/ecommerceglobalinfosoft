import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptycart, removefromcart } from '../slices/cartslice';

function Cart() {
  const cartarray = useSelector((state) => state.cartreducer);
  const dispatch = useDispatch();
  const [total, Settotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const navigate = useNavigate();

  const gettotal = () => {
    if (cartarray.length > 0) {
      Settotal(cartarray?.map(item => item?.price).reduce((p1, p2) => p1 + p2));
    } else {
      Settotal(0);
    }
  };

  const checkout = () => {
    dispatch(emptycart());
    alert('Thank You ...... Order Placed Successfully');
    navigate('/');
  };

  useEffect(() => {
    gettotal();
  }, [cartarray]);

  // Filtered cart items based on search query
  const filteredCartItems = cartarray.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ marginTop: '150px' }}>
      {cartarray.length > 0 ? (
        <div className='row w-100'>
          <div className='col-lg-6 m-5'>
            {/* Search Bar */}
            <input
              type='text'
              placeholder='Search products...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='form-control mb-3'
            />
            <table className='table border shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      <img style={{ height: '100px', width: '100px' }} src={item.image} alt='no image' />
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <Button onClick={() => dispatch(removefromcart(item.id))} variant='outline-danger btn rounded'>
                        <i className='fa-solid fa-trash fs-4'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
            <div className='border shadow p-5'>
              <h2 className='text-danger'>Cart Summary</h2>
              <h4>Total number of products: {filteredCartItems.length}</h4>
              <h4>Total price is $: {total}</h4>
              <button onClick={checkout} className='btn btn-success rounded w-100 mt-3'>CheckOut</button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
          <img style={{ height: '300px' }} src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif' alt='no image' />
          <h4>Your Cart is Empty</h4>
          <button className='btn btn-success rounded mt-3'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              Back to Home
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
