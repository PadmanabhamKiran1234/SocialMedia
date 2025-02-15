import React, { useEffect } from 'react'
import {Route ,Routes,useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { gapi } from "gapi-script";
import { fetchUser } from './utils/fetchUser';

const App = () => {
  const navigate = useNavigate();

  useEffect(() =>{
    const user = fetchUser();

    if(!user) navigate('/login');
  },[])
  return (
   <Routes>
    <Route path="login" element={<Login />} />
    <Route path="/*" element={<Home />} />
   </Routes>
  )
}
gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "***.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});

export default App
