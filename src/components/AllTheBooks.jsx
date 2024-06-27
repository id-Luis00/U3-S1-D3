import { Container } from "react-bootstrap"
import SingleBook from "./SingleBook"



const AllTheBooks = ({ genre }) => {
    return (
        <Container fluid>

            <Container className="d-flex flex-wrap justify-content-center">
                {genre.map(book =>
                (
                    <SingleBook key={book.asin} book={book} />
                )
                )}
            </Container>

        </Container>
    )
}

export default AllTheBooks