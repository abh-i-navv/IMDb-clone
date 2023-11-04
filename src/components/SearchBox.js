"use client";
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

export default function SearchBox() {

    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e){
        e.preventDefault();
        if(!search){
            return;
        }
        router.push(`/search/${search}`);
    }
  
    return (

    <div >
        <form className="flex max-w-7xl mx-auto justify-between items-center px-4 flex-1"
            onSubmit={handleSubmit}>
            <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)} 
                type='text' 
                placeholder='Search Movie...' 
                className="w-full h-10 rounded-lg placeholder:gray-500 outline-none bg-transparent"></input>
            <button disabled={!search} type='submit' className={search && "text-amber-500"}>Search</button>
        </form>
    </div>
  )
}
