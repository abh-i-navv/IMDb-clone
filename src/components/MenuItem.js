import React from 'react';
import Link from 'next/link';

function MenuItem({ title, address, Icon}) {
  return (
   
      <Link href={address} className="mx-4 lg:mx-5 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden m-1 "/> 
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
  );
}

export default MenuItem;
