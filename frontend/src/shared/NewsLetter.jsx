import { Col, Container, Row } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';
import './Newsletter.css'
const NewsLetter = () => {
  return (
    <>
        <section className='mt-'>
            <Container className='newsletter mt-0'>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter_content ">
                            <h2>Subscribe to get useful traveling information.</h2>
                            <div className="newsletter_input">
                                <input type="email" placeholder='Enter your email.'/>
                                <button className='btn newsletter_btn'>Subscribe</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, aut voluptas a maiores soluta aliquam veniam debitis iusto sapiente beatae placeat eius laboriosam consequuntur excepturi exercitationem. Doloremque quo mollitia fugiat.</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter_img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default NewsLetter