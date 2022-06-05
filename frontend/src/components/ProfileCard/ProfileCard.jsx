import './ProfileCard.css'
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <figure className='figure'>
          <img src={Profile} alt="" />
        </figure>
      </div>

      <div className="ProfileName">
        <span>Sin Bi</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className='follow'>
            <span>6,890</span>
            <span>Followings</span>
          </div>

          <div className='vl'/>

          <div className='follow'>
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl">

              </div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      
      {
        ProfilePage ? null :
        <span>
          My Profile
        </span>
      }
      
    </div>
  )
}

export default ProfileCard