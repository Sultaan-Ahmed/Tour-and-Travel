import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import './Footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
const quick_links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
];
const quick_links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
];
const Footer = () => {
  const year =new Date().getFullYear();
  return (
    <>
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure mollitia a quam nam pariatur</p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to={'#'}><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to={'#'}><i className="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to={'#'}><i className="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to={'#'}><i className="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer_link_title">
              Discover
            </h5>
            <ListGroup className="footer_quick_links">
              {
                quick_links.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer_link_title">
              Quick Links
            </h5>
          <ListGroup className="footer_quick_links">
              {
                quick_links2.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
              <h5 className="footer_link_title">Contact</h5>
              <ListGroup className="footer_quick_links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-line"></i>
                      Address:
                    </span>
                  </h6>
                  <p className="mb-0">Gazipur, Bangladesh.</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-mail-line"></i>
                      Email:
                    </span>
                  </h6>
                  <p className="mb-0">sultan.duet.te@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-phone-line p"></i>
                      Phone:
                    </span>
                  </h6>
                  <p className="mb-0">+880 1740 227207</p>
                </ListGroupItem>
              </ListGroup>
          </Col>
          <Col lg='12'>
            <p className="copyright text-center mt-5">Copyright &copy; {year}, design & developed by Sultan Ahmed. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer