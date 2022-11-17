import React, {useState, useEffect} from 'react'
import axios from 'axios';



const NewStory = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");


    //using promises
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setMyData(res.data)).catch((error) => setIsError(error.message));
        
    }, []);

  return (
    <>
    <div className="grid">
    <h1>Axios function component</h1>
    {isError !== "" && <h2>{isError}</h2>}


    {myData.map((post) => {
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

export default NewStory
