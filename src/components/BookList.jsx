import { Component } from 'react'
import SingleBook from './SingleBook'
import { Container, Form } from 'react-bootstrap'

class BookList extends Component {
    state = {
        searchQuery: '',
    }

    render() {
        return (
            <Container>


                <Form.Group className='mb-3 w-25 mx-auto'>
                    <Form.Control
                        type="search"
                        placeholder="Cerca un libro"
                        value={this.state.searchQuery}
                        onChange={e => this.setState({ searchQuery: e.target.value })}
                    />
                </Form.Group>

                <Container className="d-flex flex-wrap justify-content-center">
                    {this.props.book.filter(current_book => current_book.title.toLowerCase().includes(this.state.searchQuery)).map(book =>
                    (
                        <SingleBook key={book.asin} book={book} />
                    )
                    )}
                </Container>

            </Container>
        )
    }
}

export default BookList
