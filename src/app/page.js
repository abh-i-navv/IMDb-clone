"use server";

import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "Trending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "TopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 100000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const results = data.results;

  return (
    <div >
      <Results results={results} />
    </div>
  )
}
