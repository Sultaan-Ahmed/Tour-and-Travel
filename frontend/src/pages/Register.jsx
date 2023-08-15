import '../styles/login.css'
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
  const [credentials, setCredentials]=useState({
    userName:undefined,
    email: undefined,
    password:undefined
  })
  const handleChange=(e)=>{
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}));
  }
  const handleClick=(e)=>{
    e.preventDefault();
    alert(`${credentials.email}, ${credentials.password}`);
    setCredentials({
      email:undefined,
      password:undefined,
      userName:undefined
    })
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='User Name' id="userName" required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' id="email" required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' id="password" required onChange={handleChange} />
                  </FormGroup>
                  <Button type='submit' className='btn secondary_btn auth_btn'>Create Account</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register