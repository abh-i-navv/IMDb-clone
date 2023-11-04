import React from 'react'
import Image from 'next/image';

async function getMovie(movieId) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    return await res.json();
  }
  

export default async function MoviePage({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId);

  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          height={300}
          width={500}
          className="sm:rounded-t-lg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL='/loader.svg'
          alt='Image is loading'
          ></Image>

          <div className="p-4">
            <h1 className="font-bold mb-3">{movie.original_title || movie.name}</h1>

            <p className="mb-3"><span className="font-semibold mr-2">Overview:</span>
                {movie.overview}
            </p>

            <p className="mb-3"><span className="font-semibold mr-2">Released Date:</span>
                {movie.release_date || movie.first_air_date}
            </p>

            <p><span className="font-semibold mr-2">Votes:</span>
                {movie.vote_count}
            </p>

          </div>

        </div>

        
    </div>
  )
}
