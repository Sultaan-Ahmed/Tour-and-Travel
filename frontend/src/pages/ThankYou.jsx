import { Link } from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap"
import '../styles/thank-you.css'
const ThankYou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className="pt-5 text-center">
                    <div className="thank_you">
                        <span>
                            <i className="ri-checkbox-circle-line"></i>
                        </span>
                        <h1 className="mb-3 fw-semibold">Thank You ! </h1>
                        <h2 className="mb-4">Your tour is booked.</h2>
                        <Button className="btn primary_btn w-25">
                            <Link to='/'>Back to Home</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou