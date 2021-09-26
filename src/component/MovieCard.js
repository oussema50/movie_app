import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
const MovieCard = (props) => {
    let {movies} = props;
    return (
        <div className="movie-cart">
            {movies.map((movie)=>{
                return(
                    <div style={{marginRight:"20px",marginBottom:"20px",textAlign:"center"}} key={movie.id}>
                        <img style={{width:"200px",height:"300px"}} src={movie.imgMovie} alt={movie.name} />
                        <h4 style={{marginTop:"5px",fontSize:"25px"}}>{movie.name}</h4>
                        <StarRatingComponent name={`rate${movie.id}`} value={movie.rate}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieCard
