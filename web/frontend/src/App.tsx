import { useEffect, useState } from 'react'
import { movieDbGetMovies, setBaseUrl } from './client/client.mjs'
import { RouterProvider } from 'react-router/dom';

setBaseUrl(window.location.origin);

function App() {

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {

    try {
      const response = await movieDbGetMovies();
      console.log(response);

    } catch (error) {

      console.log(error);

    }

  }

  useEffect(() => { fetchMovies() }, []);


  return (
    <>
      <div>Home
      </div>
    </>
  )
}

export default App
