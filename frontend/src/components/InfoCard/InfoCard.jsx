import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal';
import './InfoCard.css'

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <i 
            className="ri-pencil-line"
            onClick={()=>setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>

      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Itda inst</span>
      </div>

      <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard