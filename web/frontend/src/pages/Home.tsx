import { useEffect, useState } from "react";

import { movieDbGetMovies, setBaseUrl } from '../client/client.mjs'
import Carousel from "../components/Carousel";
import Card from "../components/Card";

setBaseUrl(window.location.origin);

const Home = () => {

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {

    try {
      const response = await movieDbGetMovies();
      console.log(response);
      setMovies(response);

    } catch (error) {

      console.log(error);

    }

  }

  useEffect(() => { fetchMovies() }, []);


  return (
    <div>

      <h1>Home </h1>
      <Carousel />
      <div className="flex justify-center m-10 mt-20">
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto">

          {movies && movies.map((movie) => <Card />)}

        </div>


      </div>
      <div className="w-full h-[500px] bg-black text-white flex items-center px-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Featured Movie</h1>
          <p className="mt-2">A thrilling adventure awaits you...</p>
          <button className="mt-4 bg-yellow-500 px-4 py-2 rounded">
            Watch Trailer
          </button>
        </div>
      </div>


    </div>
  )
}

export default Home
