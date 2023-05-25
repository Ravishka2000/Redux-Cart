import { useDispatch, useSelector } from "react-redux"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id));
  }

  const cards = products.map(product => (
    <div className="col-md-12 mb-5" key={product.id}>
        <Card  className="h-100" style={{ padding: '10px' }}>
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
            <Button variant="danger" onClick={() => removeItem(product.id)}>Remove</Button>
            </Card.Footer>
        </Card>
    </div>
))



  return (
    <div className="row">
      {cards}
    </div>
  )
}

export default Cart