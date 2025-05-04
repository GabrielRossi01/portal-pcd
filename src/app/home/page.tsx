'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { FaUserPlus } from 'react-icons/fa'

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const estaAutenticado = document.cookie.includes('token=autenticado');

    if (!estaAutenticado) {
      router.push('/cad-user')
    }
  }, []); // array de dependências. Ele informa ao React quando o 
  // useEffect deve ser executado novamente
  // [] -> executa apenas uma vez

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

        {/* Nova Seção - Benefícios do Cadastro */}
        <div className="text-left text-gray-700 mb-6">
          <h3 className="text-xl font-semibold text-blue-950 mb-2">Por que se cadastrar?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Acesso a conteúdos exclusivos e personalizados</li>
            <li>Participação em eventos e promoções especiais</li>
            <li>Interação com a comunidade e redes de apoio</li>
            <li>Gestão simplificada das suas informações pessoais</li>
          </ul>
        </div>

        {/* Explicação do Propósito do Portal */}
        <div className="text-left text-gray-700 mb-6">
          <h3 className="text-xl font-semibold text-blue-950 mb-2">Sobre o Portal</h3>
          <p>
            Este portal foi criado para conectar pessoas interessadas em explorar novas oportunidades e
            melhorar sua experiência em nossa comunidade. Com o cadastro, você poderá acessar todos os
            recursos e funcionalidades que oferecemos para facilitar sua jornada.
          </p>
        </div>

        {/* Botão de Cadastro */}
        <button className="flex justify-center items-center m-auto rounded-xl p-5 mt-10 cursor-pointer text-2xl font-bold bg-gradient-to-br from-purple-300 to-blue-200 hover:bg-blue-500 transition duration-500 transform hover:scale-105">
          <Link href="/cad-user" className='text-2xl font-bold text-blue-950'>Cadastre-se</Link>
        </button>

        {/* Link de Login (caso o usuário já tenha conta) */}
        <p className="mt-4 text-blue-950 text-center">
          Já tem uma conta?
          <Link href="/login" className="text-blue-950 font-semibold hover:underline"> Faça login aqui.</Link>
        </p>
      </div>
    </div>
  )
}
