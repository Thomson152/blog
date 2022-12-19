/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Background from "../images/OregonVolleyball.jpeg";
const Home = () => {
  const [posts, setPosts] = useState([]);


  const fetchTours = async () => {
   
    try {
      const response = await fetch('http://localhost:8000/posts')
    
      const posts = await response.json()
      
     setPosts(posts)
    
    
    } catch (error) {
     
      console.log(error)
    }
 
  }
  useEffect(() => {
  fetchTours()
  }, []);
  return (
    <div>
      <Navbar />
      <img className="background" src={Background} width="80%" />
      {
        posts.map((post)=>{
        <h1>{post.body}</h1>
        })
      }


    </div>
  );
};

export default Home;
