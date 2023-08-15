/* eslint-disable react/prop-types */
import { Col, Container, Row } from 'reactstrap'
import './CommonSection.css'
const CommonSection = ({title}) => {
  return (
    <>
        <section className='common_section'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default CommonSection