import './index.css';
import React from 'react';
import Movies from './components/Movies';

function App() {

  const movies = [
    {
      name: "The Boondock Saints",
      year: "1999",
      rating: "R",
      image: "https://m.media-amazon.com/images/M/MV5BNTliMTg0ZTgtNTJiYi00MjFkLThhYTUtNDAwNTliMmVkNjVkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg"

    },
    {
      name: "How High",
      year: "2001",
      rating: "R",
      image: "https://m.media-amazon.com/images/M/MV5BZWZlNWE3MjctMDJmYS00ZTAyLWFkYmEtMzllNjU0ZDY5ODA2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"
      
    },
    {
      name: "Iron Man 2",
      year: "2010",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/I/51BOoBOooAL._AC_UF894,1000_QL80_.jpg"

    },
    {
      name: "Magnolia",
      year: "1999",
      rating: "R",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Magnolia_poster.png"
      
    },
    {
      name: "The Truman Show",
      year: "1998",
      rating: "PG",
      image: "https://mhsphoenix.com/wp-content/uploads/2023/02/the-truman-show-316x475.png"

    },
  ]


  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;