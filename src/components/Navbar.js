import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className="flex justify-center space-x-4 dark:bg-gray-700 dark:text-amber-300 text-gray-700 bg-amber-200 lg:text-lg p-4">
        <NavbarItem title="Trending" param="Trending" />
        <NavbarItem title="Top Rated" param="TopRated" />
    </div>
  )
}
