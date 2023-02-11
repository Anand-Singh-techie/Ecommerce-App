import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Row, Col, ListGroup, Button, Image, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'

const ProductDetails = ({ match }) => {

    // fetching data from server 
    const [product, setproduct] = useState([]);
    useEffect(()=>{
        const fetchproduct = async () => {
            const {data} = await axios.get(`/products/${match.params.id}`);
            setproduct(data);
        }
        fetchproduct();
    },[match])
    
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