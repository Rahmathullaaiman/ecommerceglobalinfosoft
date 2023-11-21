import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from '../hooks/usefetch';
import { useDispatch } from 'react-redux';
import { addtowishlist } from '../slices/wishlistslice';
import { addtocart } from '../slices/cartslice';

function Home() {

 const data = useFetch('https://fakestoreapi.com/products')
 console.log(data);
 const dispatch = useDispatch()
  return (
    <Row className='m-5'>
      
     {data?.length>0?
      data.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{item.title.slice(0,20)}..</Card.Title>
        <Card.Text>
        <p>{item.description.slice(0,40)}...</p>
        <p className='fw-bolder'>Price:${item.price}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
        <Button onClick={()=>dispatch(addtowishlist(item))} variant="outline-danger btn rounded"><i class="fa-solid fa-heart"></i></Button>
        <Button onClick={()=>dispatch(addtocart(item))} variant="outline-success btn rounded"><i class="fa-solid fa-cart-shopping "></i> </Button>

        </div>
      </Card.Body>
    </Card>

      </Col>))
      :<p>Nothing to display</p>
      }
    </Row>
  )
}

export default Home