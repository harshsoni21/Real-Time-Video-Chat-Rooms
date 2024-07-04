import './App.css';
import { BrowserRouter, Routes, Route, Navigate, UNSAFE_NavigationContext } from "react-router-dom";
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';

const isAuth = true;
const user = {
  isActivated : true
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/"
          element=
          {<GuestRoute>
            <Home />
          </GuestRoute>} />
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />

        <Route path='/activate' element={<SemiProtected><Activate/></SemiProtected>}/>
        <Route path='/rooms' element={<Protected><Rooms/></Protected>}/>
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children }) => {
  return isAuth ? <Navigate to="/rooms" replace /> : children;
};

const SemiProtected = ({children})=>{
  return !isAuth ? <Navigate to="/"/> : isAuth && !user.isActivated ? {children}: <Navigate to='/rooms'/>
}

const Protected = ({children})=>{
  return !isAuth ? <Navigate to="/"/> : isAuth && !user.isActivated ? <Navigate to='/activate'/>: children
}

export default App;
