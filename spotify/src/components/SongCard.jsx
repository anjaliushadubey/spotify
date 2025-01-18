import React from "react";

const SongCard = ({song}) => {
  return (
    <div className="movie">
            <div>
                <p>{song.Year} </p>
            </div>
            <div>
                <img src={song.Poster!=='N/A'? song.Poster:'https://via.placeholder.com/400'} alt={song.Title} />
            </div>
            <div>
                <span>
                    {song.Type}
                </span>
                <h3>{song.Title}</h3>
            </div>
            </div>
  )
}

export default SongCard
