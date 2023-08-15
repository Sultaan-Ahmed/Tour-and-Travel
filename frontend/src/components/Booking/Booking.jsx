/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './Booking.css'
import { useState } from 'react';
const Booking = ({tour,avgRating}) => {
    const navigate= useNavigate();
    const {price,reviews} =tour;
    const [credentials, setCredentials] =useState({
        userId:'01',
        userEmail:'sultan.duet.te@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })
    const handleChange =(e)=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }
    const serviecFee=10;
    const totalAmount=Number(price)*Number(credentials.guestSize)+Number(serviecFee)
    // send data to the server
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(credentials)
        navigate('/thank-you')
    }
  return (
    <div className='booking'>
        <div className="booking_top">
            <h3>${price} <span>/per person</span></h3>
            <span className="tour_rating d-flex align-items-center ">
                 <i className="ri-star-fill" ></i>{avgRating===0?null:avgRating} ({reviews?.length})      
            </span>
        </div>
        {/* ==============  Booking Form  ===========*/}
        <div className="booking_form">
            <h5>Information</h5>
            <Form onSubmit={handleClick} className='booking_info_form'>
                <FormGroup>
                    <input type="text" placeholder='Full name' id='fullName' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                    <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>
         {/* ==============  Booking Form end ===========*/}
        {/* ============== Booking Bottom =============== */}
        <div className="booking_bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-itmes-center gap-1'>${price} <i className="ri-close-line"></i> 1 person</h5>
                    <span>${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service Charge</h5>
                    <span>${serviecFee}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
            </ListGroup>
            <Button className='btn primary_btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>
    </div>
  )
}

export default Booking