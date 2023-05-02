import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
//    console.log(json);
    console.log(movie);

  };
  
  useEffect(() => {
    getMovie();
  }, []);
  
  return (
    <div>
      <h1>Detail</h1>
      {loading ? (<h1>Loading</h1>
      ) : (
        <div>
          {movie.title_long}
        </div>
      )}
    </div>
  );
}

export default Detail;