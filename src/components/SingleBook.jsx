import { Component } from "react"
import { Button, Card } from "react-bootstrap"


class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <Card
                onClick={() => this.setState({ selected: !this.state.selected })}
                style={{ width: '18rem', border: this.state.selected ? '3px solid purple' : 'none' }}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        {'Prezzo: '} <strong>{this.props.book.price + '€'}</strong>
                    </Card.Text>
                    <Button variant="success">Add</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook 