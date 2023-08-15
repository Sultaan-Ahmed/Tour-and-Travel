import GalleryImage from "./GalleryImage"
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry';
const MasonryImageGallery = () => {
  return (
    <>
        <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
            <Masonry gutter="1rem">
                {
                    GalleryImage.map((item,index)=>(
                        <img className="masonry_img" src={item} alt=""  key={index} style={{'width':"100%",'display':'block', 'borderRadius':'10px'}}/>
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
    </>
  )
}

export default MasonryImageGallery