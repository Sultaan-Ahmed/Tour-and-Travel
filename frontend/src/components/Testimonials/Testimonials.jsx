import Slider from 'react-slick'
import avg01 from '../../assets/images/ava-1.jpg';
import avg02 from '../../assets/images/ava-2.jpg';
import avg03 from '../../assets/images/ava-3.jpg';
const Testimonials = () => {
    const setting={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                }
            },
        ]

    }
  return (
    <>
        <Slider {...setting}>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis alias assumenda, dicta voluptatum officiis eaque, enim excepturi consequatur adipisci nesciunt optio recusandae est ut similique voluptatibus fuga nostrum! Labore.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avg01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0">
                            John Doe
                        </h6>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis alias assumenda, dicta voluptatum officiis eaque, enim excepturi consequatur adipisci nesciunt optio recusandae est ut similique voluptatibus fuga nostrum! Labore.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avg02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0">
                            John Doe
                        </h6>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis alias assumenda, dicta voluptatum officiis eaque, enim excepturi consequatur adipisci nesciunt optio recusandae est ut similique voluptatibus fuga nostrum! Labore.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avg03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0">
                            John Doe
                        </h6>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis alias assumenda, dicta voluptatum officiis eaque, enim excepturi consequatur adipisci nesciunt optio recusandae est ut similique voluptatibus fuga nostrum! Labore.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avg01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0">
                            John Doe
                        </h6>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis alias assumenda, dicta voluptatum officiis eaque, enim excepturi consequatur adipisci nesciunt optio recusandae est ut similique voluptatibus fuga nostrum! Labore.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avg02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0">
                            John Doe
                        </h6>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis alias assumenda, dicta voluptatum officiis eaque, enim excepturi consequatur adipisci nesciunt optio recusandae est ut similique voluptatibus fuga nostrum! Labore.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={avg03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0">
                            John Doe
                        </h6>
                    </div>
                </div>
            </div>
        </Slider>
    </>
  )
}

export default Testimonials