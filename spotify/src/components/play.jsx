import { useEffect, useState } from "react";
import SongCard from "./SongCard";

const API_URL='http://www.omdbapi.com?apikey=1912875e'
const song1={
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NDM4NjcyMF5BMl5BanBnXkFtZTcwMzA1NTI3Mw@@._V1_SX300.jpg",
    "Title"
    : 
    "Tere Bin Laden",
    "Type"
    : 
    "movie",
   " Year"
    : 
    "2010",
    "imdbID"
    : 
    "tt1629391"
    }

const Play=()=> {
    const [songs, setSongs]=useState([]);
   
    const searchSongs= async(title)=>{
        const response =await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setSongs(data.Search);
    }
    useEffect (()=>{
        searchSongs(`tere `)
    },[]);
    return (
        <div className="px-4 py-4 flex justify-center items-center flex-col">
            <Input  />
       { songs?.length > 0
        ?(
            <div className="w-full mt-[3rem] flex justify-center items-center flex-wrap" >
          {songs.map((song)=>(
            <SongCard song={song}/>
          ))}  
        </div>
        ) : (
            <div className="w-full mt-3 flex justify-center items-center">
                <h2 className="font-[1.25rem] ">No song found</h2>
                </div>
        )}
        </div>   
    );
}
export default Play