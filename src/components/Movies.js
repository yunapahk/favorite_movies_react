import Movie from "./Movie"

const Movies = ({movies}) => {
    return (
        <div className="Movies">
            {movies.map((movie, index) => {
                return (
                    <Movie key={index} movie={movie} />
                )
            })}
        </div>
    )
}

export default Movies
