import { Col } from 'reactstrap'
import tourData from '../../assets/data/tours.js'
import FeaturedTourCard from './FeaturedTourCard'
const FeaturedTourList = () => {
  return (
    <>
        {tourData?.map((item,index)=>(
            <Col lg='3' className='mb-4' key={index}>
                <FeaturedTourCard tour={item}/>
            </Col>
        ))}
    </>
  )
}

export default FeaturedTourList