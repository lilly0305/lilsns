import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css"
import "./elements/elements.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  const user = useSelector((state)=>state.authReducer.authData);

  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right: '0'}} />
      <div className="blur" style={{top: '36%', left: '-8rem'}}/>
      
      <Routes>
        <Route 
          path="/" 
          element={
            user
            ? <Navigate to="home"/> 
            : <Navigate to="auth"/>
          } 
        />

        <Route
          path="/home"
          element={
            user 
            ? <Home/>
            : <Navigate to="../auth"/>
          }
        />
        
        <Route
          path="/auth"
          element={
            user
            ? <Navigate to="../home" />
            : <Auth />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
