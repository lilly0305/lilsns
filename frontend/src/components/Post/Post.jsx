import './Post.css';

const Post = ({data, id}) => {
  return (
    <div className='Post'>
      <img src={data.img} alt={data.name} />

      <div className='reaction'>
        <div className="postReaction">
          {
            data.liked ? 
            <i className="ri-heart-2-fill active"/> :
            <i className="ri-heart-2-line"/>
          }
          <i className="ri-message-2-line"/>
          <i className="ri-share-forward-line"/>
        </div>
  
        <span 
          style={{color: "var(--gray)", fontSize: "16px"}}
        >
          <strong>{data.likes}</strong> likes
        </span>
      </div>

      <div className='detail'>
        <span><b>{data.name}</b></span>
        <span>{data.desc}</span>
      </div>
    </div>
  )
}

export default Post