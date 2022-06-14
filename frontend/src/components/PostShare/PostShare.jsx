import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/UploadAction';

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading)
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const dispatch = useDispatch();

  const desc = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img)
    }
  }

  const reset = () => {
    setImage(null);
    desc.current.value = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }

    if(image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename)
      data.append("file", image)
      newPost.image = filename;
      console.log(newPost)

      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(uploadPost(newPost))
    reset();
  }

  return (
    <div className='PostShare'>
      <figure className='figure'>
        <img src={ProfileImg} alt="profile" />
      </figure>
      <div>
        <input 
          ref={desc}
          type="text" 
          placeholder="What's happening"
          required
        />

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

          <button
            className='button ps-button'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading" : "Share"}
          </button>

          <div style={{display: "none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
          </div>
        </div>

        {image && (
          <div className='previewImage'>
            <i className="ri-close-line" onClick={()=> setImage(null)}/>
            <img src={URL.createObjectURL(image)} alt=""/>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare