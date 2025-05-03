import Image from 'next/image';
import React from 'react';

export default function Index() {
  return (
    <>
      <div className="relative w-full py-25 flex justify-center">
        <Image
          src="/banner-site.png"
          alt="Imagem de uma melhor em uma cadeira de rodas"
          width={1500}
          height={200}
          className='object-cover object-top' />
      </div>
    </>

  );
}