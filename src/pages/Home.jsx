import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import useFetch from '../hooks/fetch';
import { useDispatch } from 'react-redux';
import { addtocart } from '../slices/cartslice';

function Home() {
  const data = useFetch('https://fakestoreapi.com/products');
  const dispatch = useDispatch();

  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  
  useEffect(() => {
    if (data && data.length > 0) {
      const filtered = data.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredData(filtered);
    }
  }, [data, searchTerm]);

  return (
    <>
      {/* Search Bar */}
      <Form className="m-5">
        <Form.Control
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row className="m-5">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Col className="mb-5" sm={12} md={6} lg={4} xl={3} key={item.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title className="fw-bolder">{item.title.slice(0, 20)}..</Card.Title>
                  <Card.Text>
                    <p>{item.description.slice(0, 40)}...</p>
                    <p className="fw-bolder">Price: ${item.price}</p>
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button
                      onClick={() => dispatch(addtocart(item))}
                      variant="outline-success btn rounded"
                    >
                      <i className="fa-solid fa-cart-shopping fw-bolder"> Add to Cart</i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default Home;
