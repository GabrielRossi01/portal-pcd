import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-20 mt-96">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Logo + Descrição + Redes sociais */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src="/logo-site.png"
              alt="Logo do site"
              width={150}
              height={150}
              className="mb-4 cursor-pointer"
            />
          </Link>

          <p className="text-sm text-gray-300 max-w-xs mb-3">
            Um portal dedicado a oferecer acessibilidade, inclusão e oportunidades para todas as pessoas com deficiência.
          </p>

          {/* Ícones das redes sociais + imagem adicional */}
          <div className="flex gap-4 mt-2">
            <FaInstagram className="text-white hover:text-blue-950 text-xl transition cursor-pointer" />
            <FaFacebookF className="text-white hover:text-blue-950 text-xl transition cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-blue-950 text-xl transition cursor-pointer" />
            <div>
              <Image
                src="/wheelchair-footer.png"
                alt="Figura de uma menina em uma cadeira de rodas"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>

        {/* Saiba mais */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Saiba Mais</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="text-white hover:text-blue-950 transition cursor-pointer">Media</li>
            <li className="text-white hover:text-blue-950 transition cursor-pointer">Eventos</li>
            <li className="text-white hover:text-blue-950 transition cursor-pointer">Programas</li>
            <li className="text-white hover:text-blue-950 transition cursor-pointer">Espaços</li>
            <li className="text-white hover:text-blue-950 transition cursor-pointer">Acordos</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Email: <span className="text-white hover:text-blue-950 transition cursor-pointer">portalpcd@gmail.com.br</span></li>
            <li>Telefone: <span className="text-white hover:text-blue-950 transition cursor-pointer">(11) 96312-9999</span></li>
          </ul>
        </div>
      </div>

      {/* Exemplo de créditos ao final do site  */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t-2 border-white/10 pt-4">
        &copy; {new Date().getFullYear()} Portal PCD. Todos os direitos reservados.
      </div>
    </footer>
  )
}