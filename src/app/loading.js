import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex justify-center">
        <Image src='loader.svg' alt='loading' width={200} height={200}></Image>
    </div>
  )
}
