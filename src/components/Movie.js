const Movie = ({movie}) => {
    //The Components Returned JSX
    return (
        <div className="Movie">
            <h2>{movie.name} {movie.year}</h2>
            <p>Rating: {movie.rating}</p>
            <img src={movie.image} alt={movie.name} />
        </div>
    )
}

// export the component
export default Movie;