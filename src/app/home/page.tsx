import Link from 'next/link'
import React from 'react'
import { FaUserPlus } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">

      <div className="bg-gradient-to-br from-purple-300 to-blue-200 shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4 text-blue-700 text-4xl">
          <FaUserPlus className="text-blue-950" />
        </div>
        <h2 className="text-2xl font-bold text-blue-950 mb-2">Faça parte da comunidade!</h2>
        <p className="text-gray-600 mb-6 mt-6">
          Cadastre-se para ter acesso completo às funcionalidades e oportunidades do nosso portal.
        </p>

        <button className="flex justify-center items-center m-auto rounded-xl p-5 mt-10 cursor-pointer text-2xl font-bold bg-gradient-to-br from-purple-300 to-blue-200 hover:bg-blue-500 transition duration-500 transform hover:scale-105">
          <Link href="/cad-user" className='text-2xl font-bold text-blue-950'>Cadastre-se</Link>
        </button>
      </div>
    </div>
  )
}