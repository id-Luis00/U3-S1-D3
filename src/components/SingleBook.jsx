import { Button, Card } from "react-bootstrap"


const SingleBook = ({ book }) => (

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
                {'Prezzo: '} <strong>{book.price + '€'}</strong>
            </Card.Text>
            <Button variant="success">Add</Button>
        </Card.Body>
    </Card>

)

export default SingleBook 