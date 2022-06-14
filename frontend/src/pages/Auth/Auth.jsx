import { useState } from 'react'
import Logo from '../../elements/Logo'
import './Auth.css'
import {useDispatch, useSelector} from "react-redux";
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducer.loading)

  console.log(loading)

  const [isSignUp, setIsSignUp] = useState(false)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: ""
  })
  const [confirmPass, setConfirmPass] = useState(true)


  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignUp) {
      data.password === data.confirmpass 
      ? dispatch(signUp(data)) 
      : setConfirmPass(false)
    } else {
      dispatch(logIn(data))
    }
  }

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: ""
    });
  }

  return (
    <div className='Auth'>
      {/* left logo */}
      <div className="a-left">
        <div className="Webname gradientFontColor">
          <Logo />
          <h6>Explore the ideas throught the world</h6>
        </div>
      </div>

      {/* right form */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

          {isSignUp && 
            <div>
              <input 
                type="text" 
                placeholder='First Name' 
                className='infoInput'
                name='firstname'
                onChange={handleChange}
                value={data.firstname}
              />
              <input 
                type="text" 
                placeholder='Last Name' 
                className='infoInput'
                name='lastname'
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          }

          <div>
            <input 
              type="text" 
              placeholder='User Name' 
              className='infoInput'
              name='username'
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input 
              type="password" 
              placeholder='Password' 
              className='infoInput'
              name='password'
              onChange={handleChange}
              value={data.password}
            />

            {isSignUp && 
              <input 
                type="password" 
                placeholder='Confirm Password' 
                className='infoInput'
                name='confirmpass'
                onChange={handleChange}
                value={data.confirmpass}
              />
            }
          </div>

          <span 
            style={{
              display: confirmPass? "none": "block", 
              color: "red", 
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight:"5px"
            }}
          >
            * Confirm Password is not same
          </span>

          <div>
            <span 
              style={{fontSize: "12px", cursor: "pointer"}} 
              onClick={()=> {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {
                isSignUp ?  
                "Already have an account? Log in!"  
                :
                "Dont't have an account? Sign up!"
              }
            </span>
          </div>

          <button 
            className='button info-button' 
            type='submit'
            disabled={loading}
          >
            {
              loading? "Loading..." :
              isSignUp ? "Sign up" : "Log In"
            }
          </button>
        </form>
      </div>

    </div>
  )
}

export default Auth