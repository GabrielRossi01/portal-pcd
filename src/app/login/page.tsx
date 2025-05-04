'use client'

import { useState } from 'react';
import '../globals.css';
import Image from 'next/image';
import { TipoLogin } from '@/types/TipoLogin';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importando os ícones
import Link from 'next/link';

export default function Login() {

  // Estado para armazenar os dados do formulário de login
  const [formData, setFormData] = useState<TipoLogin>({ email: '', senha: '' });

  // Estado para mensagem de erro
  const [error, setError] = useState<string>('');

  // Hook do Next.js para navegação - React Router
  const router = useRouter();

  // Função para lidar com o envio do formulário de login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se o token está presente no cookie
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));

    if (token) {

      // Verifica se o usuário está armazenado no localStorage
      const user = localStorage.getItem('usuario');

      if (user) {
        const parsedUser = JSON.parse(user);

        // Compara os dados inseridos com os dados armazenados
        if (parsedUser.email === formData.email && parsedUser.senha === formData.senha) {

          router.push('/home');    // Redireciona para a página inicial
          return;
        }
      }
    }

    // Se as credenciais estiverem incorretas, exibe uma mensagem de erro
    setError('Credenciais inválidas. Tente novamente.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    })); // atualiza o estado do formulário

    setError(''); // limpa o erro quando o usuário começa a digitar
  };

  return (
    <div className='flex items-center justify-center h-screen px-4'>
      <form onSubmit={handleLogin} className='flex flex-col items-center bg-gradient-to-br from-purple-300 to-blue-200 p-10 rounded-xl shadow-lg w-full max-w-2xl'>
        <h1 className='text-3xl text-blue-950 font-bold mb-6'>Login</h1>

        <Image
          src="/fig-login.png"
          alt='Imagem de uma médica sentada ao lado de uma garota em um sofá'
          width={200}
          height={200}
          className='mb-9 mt-9' />

        {/* Campo de E-mail */}
        <div className='mb-4 flex items-center border border-blue-950 p-2 rounded w-full max-w-sm'>
          <FaEnvelope className="text-blue-950 text-2xl mr-3" /> {/* Ícone de E-mail */}
          <input
            type="email"
            placeholder="E-mail"
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full border-none outline-none'
          />
        </div>

        {/* Campo de Senha */}
        <div className='mb-4 flex items-center border border-blue-950 p-2 rounded w-full max-w-sm'>
          <FaLock className="text-blue-950 text-2xl mr-3" /> {/* Ícone de Senha */}
          <input
            type="password"
            placeholder="Senha"
            name='senha'
            value={formData.senha}
            onChange={handleChange}
            className='w-full border-none outline-none'
          />
        </div>

        {/* Mensagem de erro se houver */}
        {error && <p className='text-red-500 text-sm font-medium mb-3'>{error}</p>} {/* exibe mensagem de erro em vermelho */}

        <button
          type="submit"
          className='bg-blue-950 text-white p-2 rounded cursor-pointer hover:bg-blue-900 w-full max-w-sm'
        >
          Entrar
        </button>

        <p className='mt-4 text-blue-950 text-center'>
          Não tem uma conta? <Link href="/cad-user" className='text-blue-950 font-semibold hover:underline'>Cadastre-se</Link>
        </p>

      </form>
    </div>
  )
}
