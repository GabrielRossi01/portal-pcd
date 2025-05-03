'use client'

import { useState } from 'react';
import '../globals.css';
import Image from 'next/image';
import { TipoLogin } from '@/types/TipoLogin';
import { useRouter } from 'next/navigation';

export default function Login() {

  // Estado para armazenar os dados do formulário de login
  const [formData, setFormData] = useState<TipoLogin>({ email: '', senha: '' });

  // Estado para mensagem de erro
  const [error, setError] = useState<string>('');

  // Hook do Next.js para navegação - React Router
  // O useRouter é um hook que permite acessar o objeto de roteamento do Next.js, facilitando a navegação entre páginas
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

    setError(''); // limpa o erro quando o usuário comça a digitar
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

        <input
          type="email"
          placeholder="Email"
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='border border-blue-950 p-2 mb-4 rounded w-full max-w-sm'
        />

        <input
          type="password"
          placeholder="Senha"
          name='senha'
          value={formData.senha}
          onChange={handleChange}
          className='border border-blue-950 p-2 mb-4 rounded w-full max-w-sm'
        />

        {/* Mensagem de erro se houver */}
        {error && <p className='text-red-500 text-sm font-medium mb-3'>{error}</p>} {/* exibe mensagem de erro em vermelho */}

        <button
          type="submit"
          className='bg-blue-950 text-white p-2 rounded cursor-pointer hover:bg-blue-900 w-full max-w-sm'
        >
          Entrar
        </button>

        <p className='mt-4 text-blue-950 text-center'>
          Não tem uma conta? <a href="/cad-user" className='underline'>Cadastre-se</a>
        </p>

      </form>
    </div>
  )
}