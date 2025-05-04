'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {

    // Estado para controlar a abertura e fechamento do menu hamburguer
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="backdrop-blur-sm bg-black/50 border-b border-white/50 text-white font-normal text-lg">
            <div className="flex justify-between items-center py-6 px-6 md:py-10 md:px-20">
                <Link href="/">
                    <Image
                        src="/logo-site.png"
                        alt="Logo do site"
                        width={180}
                        height={180}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Menu hamburguer visível apenas na versão mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >

                        {/* Ícone muda dependendo do estado do menu (hamburger ou X) / operador ternário */}
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navegação padrão no desktop */}
                <nav className="hidden md:block">
                    <ul className="flex gap-12 font-sans">
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/home">Home</Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/listagem">Serviços</Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/update">Atualizar dados</Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/login">Login</Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/cad-user">Cadastro</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Menu de navegação exibido no mobile quando o menu está aberto */}
            {menuOpen && (
                <nav className="md:hidden px-6 pb-10">
                    <ul className="flex flex-col gap-4 text-center font-sans">
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/home">Home</Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/listagem">Serviços</Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/update">Atualizar dados</Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/login">Login</Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-gray-400">
                            <Link href="/cad-user">Cadastro</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}