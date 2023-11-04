"use client";
import React from 'react'
import Link from 'next/link'

import { useSearchParams } from "next/navigation";

export default function NavbarItem({title,param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
        <Link className={`m-4 p-4 text-xl ${genre && param === genre && "underline underline-offset-8 decoration-4 rounded-full decoration-amber-500"}`} 
          href={`/?genre=${param}`}>{title}</Link>

    </div>
  )
}
