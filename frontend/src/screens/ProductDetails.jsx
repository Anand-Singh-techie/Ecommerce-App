import React from 'react'
import products from '../products'
import { Row, Col, ListGroup, Button, Image, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'

const ProductDetails = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id) 
  return (
    <div>
        <Link to='/' className='btn btn-light'><i className='fas fa-arrow-left'></i>
            &nbsp; Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                    </ListGroupItem>
                    <ListGroupItem>Price : ${product.price}</ListGroupItem>
                    <ListGroupItem>{product.description}</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroupItem>
                    <Row>
                        <Col>Status :</Col>
                        <Col>{product.countInStock >0 ? 'In Stock': 'Out of Stock'}</Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Button className='w-100' type='button'>Add to cart</Button>
                </ListGroupItem>
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetails