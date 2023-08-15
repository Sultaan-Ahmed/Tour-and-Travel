import { Col } from "reactstrap"
import weatherImg from '../../assets/images/weather.png';
import guideImg from '../../assets/images/guide.png';
import customizationImg from '../../assets/images/customization.png';
import ServiceCard from "./ServiceCard";

const servicesData=[
    {
        imgUrl:weatherImg,
        title:'Calculate Weather',
        desc:'Lorem ipusm dolor sit amet, consectetur adipsicing elit'
    },
    {
        imgUrl:guideImg,
        title:'Best Tour Guide',
        desc:'Lorem ipusm dolor sit amet, consectetur adipsicing elit'
    },
    {
        imgUrl:customizationImg,
        title:'Customization',
        desc:'Lorem ipusm dolor sit amet, consectetur adipsicing elit'
    },

]
const ServiceList = () => {
  return (
    <>
        {
            servicesData.map((item,index)=>(
                <Col lg='3' key={index}>
                    <ServiceCard item={item}/>
                </Col>
            ))
        }
    </>
  )
}

export default ServiceList