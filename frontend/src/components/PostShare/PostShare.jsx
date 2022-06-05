import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import { useRef, useState } from 'react'

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      })
    }
  }

  return (
    <div className='PostShare'>
      <figure className='figure'>
        <img src={ProfileImg} alt="profile" />
      </figure>
      <div>
        <input type="text" placeholder="What's happening"/>

        <div className="postOptions">
          <div className='option'
            onClick={()=> imageRef.current.click()}
          >
            <i className="ri-image-line"/>
            Photo
          </div>
          <div className='option'>
            <i className="ri-movie-2-line"/>
            Video
          </div>
          <div className='option'>
            <i className="ri-map-pin-line"/>
            Location
          </div>
          <div className='option'>
            <i className="ri-calendar-todo-line"/>
            Schedule
          </div>

          <button className='button ps-button'>Share</button>

          <div style={{display: "none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
          </div>
        </div>

        {image && (
          <div className='previewImage'>
            <i className="ri-close-line" onClick={()=> setImage(null)}/>
            <img src={image.image} alt=""/>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare