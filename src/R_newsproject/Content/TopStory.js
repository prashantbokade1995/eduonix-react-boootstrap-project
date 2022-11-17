import React from 'react';
import './TopStory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


// BONUS :
// ------
// Define a route of format /:type/:id or /top/:id depending on your current route.When the user tries to open the above route with a story id, your page should scroll the position of the story and highlight that story.
// ------
// APIS :
// ------
// Top Stories API: https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
// New Stories API: https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty
// Best Stories API: https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty

// Story Details API: https://hacker-news.firebaseio.com/v0/item/{story_id.json}?print=pretty
// Ex: https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty



const TopStory = () => {

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

     // errortry and catch 
     const getApiData = async () => {
        try {
            // const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty');
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setMyData(res.data)
        } catch (error) {
            setIsError(error.message);
        }
        
    }
    useEffect(() => {
        getApiData();
    }, []);


  return (

    <>
    <div className="grid">
    <h1>Axios function component</h1>
    {isError !== "" && <h2>{isError}</h2>}
    {myData.slice(0, 5).map((post) => {
        const {id, title, body} = post;
        return(
            <div className="card" key={id}>
            <h2>{title}</h2>            
            <h2>{title.slice(0, 15)}</h2>
            <p>{body}</p>         
            <p>{body.slice(0, 100)}</p>
            </div>
        );
    })}
    </div>

    </>
  )
}

export default TopStory
