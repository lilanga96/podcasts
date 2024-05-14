import React from "react"
import { useEffect, useState } from "react"
import { fetchAllShows } from "./API"
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Navigation from "./Components/Navigation"
import SeasonDetails from "./SeasonDetails"
import ShowDetails from "./ShowDetails"
import Favorites from "./Components/Favorites"


function App(){

  const [token, setToken] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetchAllShows();
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


 if (token){
  sessionStorage.setItem('token', JSON.stringify(token))
}

useEffect(() => {
  if(sessionStorage.getItem('token')){
    let data = JSON.parse(sessionStorage.getItem('token'))
     setToken(data)
  }
 
}, [])


  return (
    <>
    <Navigation />
     <Routes>
      <Route path="/" element = {<HomePage token = {token}  data = {data}/>} />
      <Route path="/sign-in" element = {<SignIn  setToken = {setToken}/>} />
      <Route path="/sign-up" element = {<SignUp />} />
      <Route path="/show-details/:id" element = {<ShowDetails />} />

      <Route path='/show/:id/season/:seasonNumber' element = {<SeasonDetails />} />
      <Route path="/favorites" element = {<Favorites />} />
      
  
     </Routes>
    </>
  )
}

export default App
