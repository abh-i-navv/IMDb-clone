import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'

export default function Card({result}) {
  return (
    <div key = {result.id} className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border border-slate-400 m-2 p-2 sm:m-2 transition-shadow duration-200">
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          height={300}
          width={500}
          className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL='/loader.svg'
          alt='Image is loading'
          ></Image>

            <div>
                <h2 className="font-bold">{result.original_title || result.name}</h2>
                <p className="line-clamp-2 text-md">{result.overview}</p>
                <div className="flex mt-2">
                    <p>{result.release_date || result.first_air_date}</p>
                    <BsFillHandThumbsUpFill className="h-auto ml-5 mr-2"/> {result.vote_count}
                </div>
            </div>

        </Link>
    </div>
  )
}
