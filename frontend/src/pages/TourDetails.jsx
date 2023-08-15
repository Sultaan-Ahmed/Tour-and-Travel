/* eslint-disable no-unused-vars */
import '../styles/tourDetails.css';
import tourData from '../assets/data/tours.js';
import { useParams } from 'react-router-dom';
import { Col, Container, Form, ListGroup, Row } from 'reactstrap';
import calculateAvgRating from '../utils/avgRating'
import avatar  from '../assets/images/avatar.jpg'
import { useRef, useState } from 'react';
import Booking from '../components/Booking/Booking';
import NewsLetter from '../shared/NewsLetter';
const TourDetails = () => {
  const {id} =useParams();
  const reviewMsgRef=useRef('');
  const [tourRating,setTourRating] = useState(null);
  // TODO: This is an static data, later we call our API and load our data form backend database.
  const tour= tourData.find((item)=>item.id===id);
  const {photo, title, desc,price, address, reviews, city, distance, maxGroupSize}=tour;
  const {totalRating,avgRating}= calculateAvgRating(reviews)
  // format date
  const options ={day:'numeric',month:'long',year:'numeric'}

  // submit request to the server
  const submitHandler=(e)=>{
    e.preventDefault();
    const reviewText= reviewMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`)
    //TODO: later we will call our API
  }
  return (
    <>
     <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour_content">
              <img src={photo} alt="" />
              <div className="tour_info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                {/* <span className="tour_location d-flex align-items-center gap-1">
                        <i className="ri-map-pin-line"></i>{city}
                    </span> */}
                    <span className="tour_rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>{avgRating===0?null:avgRating}
                        {totalRating===0?'Not rated':( <span>({reviews.length})</span>)}
                        
                    </span>
                    <span className="tour_location d-flex align-items-center gap-1">
                        <i className="ri-map-pin-user-line"></i>{address}
                    </span>
                </div>
                <div className="tour_extra_details">
                  <span>
                    <i className="ri-map-pin-2-line"></i>{city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i>${price}/per person
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line"></i>{distance} k/m
                  </span>
                  <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
              {/* ============== Tour reviews section start */}
              <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span onClick={()=>setTourRating(1)}>1 <i className="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(2)}>2 <i className="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(3)}>3 <i className="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(4)}>4 <i className="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(5)}>5 <i className="ri-star-s-fill"></i></span>
                    </div>
                    <div className="review_input">
                      <input required ref={reviewMsgRef} type="text" placeholder='Share your thoughts' />
                      <button type="submit" className='btn primary_btn text-white'>Submit</button>
                    </div>
                  </Form>
                  <ListGroup className='user_reviews'>
                    {
                      reviews?.map((item,index)=>(
                        <div key={index} className="review_item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Sultan</h5>
                                <p>
                                  {new Date('08-14-2023').toLocaleDateString('en-us',options)}
                                </p>
                                <h6>Amazing Tour.</h6>
                              </div>
                              <span className="d-flex align-items-center">
                                5 <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
              </div>
              {/* ============== Tour reviews section end */}
            </div>
          </Col>
          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
     </section>
     <NewsLetter/>
    </>
  )
}

export default TourDetails