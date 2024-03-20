import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import blog from './data'


function GridExample() {
    return (
        <Row xs={1} md={2} className="g-4">

            {blog.map((post, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" style={{ width: "auto" }} src={post.imageUrl} />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                            <Button variant='link' color='white'><a href={post.blogUrl}>Read more..</a></Button>
                            <Card.Footer className='card_footer'>
                                <small className="text-muted">By {post.author}</small>
                                <small className="text-muted">Last updated on {post.date}</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default GridExample;