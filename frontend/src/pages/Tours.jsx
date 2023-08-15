import CommonSection from "../shared/CommonSection"
import '../styles/tour.css';
import tourData from '../assets/data/tours.js';
import TourCard from '../components/FeaturedTour/FeaturedTourCard';
import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter'
import { Col, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
const Tours = () => {
  const [pageCount,setPageCount]=useState(0);
  const [page,setPage]=useState(0);
  useEffect(()=>{
   const pages= Math.ceil(5/4) //TODO: later we will use backend data count.
    setPageCount(pages);
  },[page])
  return (
    <>
      <CommonSection title={'All Tours.'}/>
      <section className="pt-0">
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      <section className="pt-0 mx-0">
        <Container>
          <Row>
            {tourData?.map((item,index)=>(
              <Col key={index} lg='3' className="mb-0">
                <TourCard tour={item}/>
              </Col>
            ))}
            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number=>(
                  <span key={number} onClick={()=>setPage(number)} className={page===number?'active_page':''}>
                    {number+1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter/>
    </>
  )
}

export default Tours