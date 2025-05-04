import Image from 'next/image';
import './globals.css';

import Link from 'next/link';

export default function NotFound() {
    return (

        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">

            <Image
                src="/not-found.png"
                alt='Imagem de um menino triste'
                width={250}
                height={250}
            />

            <h1 className="text-6xl font-bold text-white mt-7">404</h1>
            <p className="text-xl mt-4 text-white">Página não encontrada.</p>
            <Link href="/" className="mt-6 text-white hover:underline">
                Voltar para a página inicial
            </Link>
        </div>
    );
}
