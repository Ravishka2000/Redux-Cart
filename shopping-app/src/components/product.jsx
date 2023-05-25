import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import Spinner from 'react-bootstrap/Spinner';

const Product = () => {
    
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    const addToCart = (product) => {
        dispatch(add(product));
    }

    if (status === 'loading'){
        return <Spinner animation="grow" />;
    }

    if (status === 'error'){
        return <p>Something went wrong!</p>;
    }

    const cards = products.map(product => (
        <div className="col-md-3 mb-5" key={product.id}>
            <Card  className="h-100" style={{ width: '18rem', padding: '10px' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '200px', height: '230px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }} className="text-center">
                    <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <div className="container">
            <h1 className="text-center my-4">Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </div>
    )
}

export default Product;