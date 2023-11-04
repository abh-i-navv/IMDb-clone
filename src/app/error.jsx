"use client";
import React from 'react'

export default function Error({error,reset}) {
  return (
    <div className="text-center mt-8">
        <h2>Something went wrong</h2>
        <button className="hover:text-amber-600 " onClick={()=>{reset}}>Reset</button>
    </div>
  )
}
