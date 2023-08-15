import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap'
import world from '../assets/images/world.png';
import heroImg from '../assets/images/hero-img01.jpg';
import experienceImg from '../assets/images/experience.png'
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../components/Services/ServiceList';
import FeaturedTourList from '../components/FeaturedTour/FeaturedTourList';
import MasonryImageGallery from '../components/TourGallery/MasonryImageGallery';
import Testimonials from '../components/Testimonials/Testimonials';
import NewsLetter from '../shared/NewsLetter';
const Home = () => {
  return (
    <>
      {/* ============= Hero section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={world} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, fuga distinctio cum eveniet, quas mollitia enim sit repellendus hic ea, exercitationem deleniti neque minima ab cupiditate magni deserunt facere nobis!</p>
              </div>
            </Col>
            <Col lg='2' >
              <div className='hero_img-box'>
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2' >
              <div className='hero_img-box mt-4'>
                <video controls src={heroVideo} alt="" />
              </div>
            </Col>
            <Col lg='2' >
              <div className='hero_img-box mt-5'>
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* ============= Hero section start ========== */}

      {/* ============= Service section start ========== */}
       <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="service_subtitle">What we serves</h5>
              <h2 className="service_title">We offer our best services.</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>
      {/* ============= Service section  end start ========== */}
      {/* ============= Feature section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className='teatured_tour_title '>Our Featured Tours.</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      {/* ============= Service section end ========== */}

      {/* ============= Experience section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience_content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With our all experience <br /> we will serve you.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias! Cupiditate repellendus quidem sed <br /> deserunt facilis assumenda et facere. Laudantium delectus vero labore dolorem, nobis impedit expedita ipsam beatae magnam?</p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>13k+</span>
                  <h6>Successful Trip.</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular Clients.</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years Experience.</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= Experience section end ========== */}

      {/* ============= Experience section end ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImageGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= Experience section end ========== */}

      {/* ============= Testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial_title">What our fans says about us.</h2>
            </Col>
            <Col lg='12'>
             <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= Testimonial section end ========== */}
      <NewsLetter/>
    </>
  )
}

export default Home