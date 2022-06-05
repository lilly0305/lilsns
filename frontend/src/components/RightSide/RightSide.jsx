import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard';
import { useState } from 'react';
import ShareModal from '../ShareModal/ShareModal';

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className='RightSide'>
      <div className="navIcons">
        <i className="ri-home-6-line active"/>
        <i className="ri-settings-4-line"/>
        <i className="ri-notification-2-line"/>
        <i className="ri-message-2-line"/>
      </div>

      <TrendCard />

      <button 
        className='button r-button'
        onClick={()=>setModalOpened(true)}
      >
        Share
      </button>
      <ShareModal 
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  )
}

export default RightSide