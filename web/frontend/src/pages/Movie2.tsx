
export default function MovieDetails({ movie }) {

  return (
    <div className="w-full min-h-screen bg-black text-white">

      {/* Top Banner */}
      <div
        className="h-[400px] w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${movie.backdropUrl || movie.posterUrl})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black"></div>

        <div className="absolute bottom-10 left-10">
          <h1 className="text-5xl font-bold drop-shadow-lg">{movie.title}</h1>
          <div className="flex gap-4 text-lg mt-2">
            <span>{movie.releasedYear}</span>
            <span>|</span>
            <span className="flex items-center gap-1">
              ⭐ {movie.voteAverage}/10
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-10 px-4 flex gap-10">

        {/* Poster */}
        <img
          src={movie.posterUrl}
          className="w-64 rounded-lg shadow-lg"
          alt={movie.title}
        />

        {/* Movie Info */}
        <div className="flex-1">

          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">{movie.description}</p>

          {/* Rating Box */}
          <div className="mt-6 flex gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-xl font-bold">{movie.voteAverage}</div>
              <div className="text-sm text-gray-400">User Score</div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-xl font-bold">{movie.votesCount}</div>
              <div className="text-sm text-gray-400">Votes</div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-xl font-bold">{movie.popularity}</div>
              <div className="text-sm text-gray-400">Popularity</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600">
              ▶ Watch Trailer
            </button>
            <button className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800">
              Add to Watchlist
            </button>
          </div>

        </div>
      </div>

      {/* Cast Section */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {movie.cast?.map((actor) => (
            <div key={actor.id} className="w-32 text-center">
              <img
                src={actor.image}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <h3 className="text-sm mt-2 font-medium">{actor.name}</h3>
              <p className="text-xs text-gray-400">{actor.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Similar Movies */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-20">
        <h2 className="text-2xl font-semibold mb-4">Similar Movies</h2>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {movie.similar?.map((m) => (
            <div key={m.id} className="w-40">
              <img
                src={m.posterUrl}
                className="w-40 h-60 object-cover rounded-lg"
              />
              <h4 className="text-sm mt-2">{m.title}</h4>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
