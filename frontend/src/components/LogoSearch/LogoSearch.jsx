import Logo from '../../elements/Logo'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <i className="ri-polaroid-line gradientFontColor"/>
      <div className="Search">
        <input type="text" name="" id="" placeholder='#Explore'/>
        <div className="s-icon">
          <i className="ri-search-2-line"/>
        </div>
      </div>
    </div>
  )
}

export default LogoSearch