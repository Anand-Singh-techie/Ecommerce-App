import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Row,Col} from 'react-bootstrap';
import ProductScreen from './ProductScreen';

const HomeScreen = () => {

  //usestate and useeffect is used to fetch data from the server Hooks Concept
  const [products,setproducts] = useState([]);
  useEffect(()=> {
    const fetchproducts = async () => {
      const {data} = await axios.get('/products');
      setproducts(data);
    }
    fetchproducts();
  },[])
  return (
    <>
     <Row>
        {
            products.map((product) => (
                <Col key={product._id} md={3}>
                  <ProductScreen product={product}/>
                </Col>
            ))
        }
     </Row>
    </>
  )
}

export default HomeScreen