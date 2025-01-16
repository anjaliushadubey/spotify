import { useEffect } from "react";

const API_URL='http://www.omdbapi.com?apikey=1912875e'
const Play=()=> {
    
    
    const searchSongs= async(title)=>{
        const response =await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }
    useEffect (()=>{
        searchSongs(`tere `)
    },[]);
    return (
        <div >
        <h1>Songs</h1>
        
        </div>
    )
}
export default Play;