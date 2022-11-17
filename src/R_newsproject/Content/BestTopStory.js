import React, {useState, useEffect} from 'react'
import axios from 'axios';


const API = "https://jsonplaceholder.typicode.com";

const BestTopStory = () => {

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // errortry and catch 
    const getApiData = async (url) => {
        try {
            const res = await axios.get(url);
            setMyData(res.data)
        } catch (error) {
            setIsError(error.message);
        }
        
    }

    useEffect(() => {
        getApiData(`${API}/posts`);
    }, []);



  return (
    <>
    <div className="grid">
    <h1>{isError !== "" && <h2>{isError}</h2>}</h1>
    


    {myData.map((post) => {
        const {id, title, body} = post;
        return(

            <div className="card" key={id}>          
            <h2>{title}</h2>    
            <p>{body.slice(0, 100)}</p>
            </div>
        );
    })}
    </div>
    </>
  )
}

export default BestTopStory
