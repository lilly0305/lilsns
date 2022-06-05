import Logo from '../../elements/Logo'
import './Auth.css'

const Auth = () => {
  return (
    <div className='Auth'>
      <div className="a-left">
        <div className="Webname gradientFontColor">
          <Logo />
          <h6>Explore the ideas throught the world</h6>
        </div>
      </div>

      {/* <SignUp /> */}
      <Login/>
    </div>
  )
}

function Login() {
  return(
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input 
            type="text" 
            placeholder='User Name' 
            className='infoInput'
            name='username'
          />
        </div>

        <div>
          <input 
            type="password" 
            placeholder='Password' 
            className='infoInput'
            name='password'
          />
        </div>

        <div>
          <span style={{fontSize: "12px"}}>Dont't have an account Sign up</span>
          <button className="button info-button">Login</button>
        </div>
      </form>
    </div>
  )
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input 
            type="text" 
            placeholder='First Name' 
            className='infoInput'
            name='firstname'
          />
          <input 
            type="text" 
            placeholder='Last Name' 
            className='infoInput'
            name='lastname'
          />
        </div>


        <div>
          <input 
            type="text" 
            placeholder='User Name' 
            className='infoInput'
            name='username'
          />
        </div>

        <div>
          <input 
            type="password" 
            placeholder='Password' 
            className='infoInput'
            name='password'
          />
          <input 
            type="password" 
            placeholder='Confirm Password' 
            className='infoInput'
            name='confirmpass'
          />
        </div>

        <div>
          <span style={{fontSize: "12px"}}>Already have an account? Login!</span>
        </div>

        <button className='button info-button' type='submit'>
          Sign up
        </button>
      </form>
    </div>
  )
}

export default Auth