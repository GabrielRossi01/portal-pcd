'use client'

import { TipoCadastro } from '@/types/TipoCadastro';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';


export default function cadUser() {

  // Estado para armazenar os dados do formulário (email e senha)
  const [formData, setFormData] = useState<TipoCadastro>({
    email: '',
    senha: ''
  });

  // Estado para armazenar a mensagem de erro
  const [error, setError] = useState<string>('');

  // Função chamada ao submeter o formulário
  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Validação simples para garantir que ambos os campos estão preenchidos
    if (!formData.email || !formData.senha) {
      setError('Todos os campos são obrigatórios!') // Exibe erro se faltar algum campo
      return;
    }

    // Simulação do processo de cadastro, armazenando dados no localStorage
    const userData = { email: formData.email, senha: formData.senha };
    localStorage.setItem('usuario', JSON.stringify(userData)); // Salva os dados no localStorage

    document.cookie = 'token=autenticado; path=/; max-age=3600'; // define um cookie de autenticação

    // Notifica usuário após o cadastro bem sucedido
    alert('Cadastro realizado com sucesso!');
    setFormData({ email: '', senha: '' }); // Limpa os campos após o cadastro
  };

  // Função para atualizar o estado do formulário quando o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // atualiza o estado do formulário
    }));

    setError(''); // limpa o erro quando o usuário começa a digitar
  }


  return (
    <div className='flex items-center justify-center h-screen px-4'>
      <form onSubmit={handleCadastro} className='flex flex-col items-center bg-gradient-to-br from-purple-300 to-blue-200 p-10 rounded-xl shadow-lg w-full max-w-2xl'>
        <h1 className='text-3xl text-blue-950 font-bold mb-6'>Cadastro</h1>

        <Image
          src="/fig-cadastro.png"
          alt=''
          width={200}
          height={200}
          className='mb-9 mt-9' />

        <div className='mb-4 flex items-center border border-blue-950 p-2 rounded w-full max-w-sm'>
          <FaEnvelope className="text-blue-950 text-2xl mr-3" /> {/* Ícone de E-mail */}
          <input
            type="text"
            placeholder="E-mail"
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full border-none outline-none'
          />
        </div>

        <div className="mb-4 flex items-center border border-blue-950 p-2 rounded w-full max-w-sm">
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


        {/* Exibe mensagem de erro, se houver */}
        {error && <p className="text-red-500 text-sm font-medium mb-3">{error}</p>}

        <button
          type="submit"
          className='bg-blue-950 text-white p-2 rounded cursor-pointer hover:bg-blue-900 w-full max-w-sm'
        >
          Cadastrar
        </button>

        <p className='mt-4 text-blue-950 text-center'>
          Já possui uma conta? <Link href="/login" className='text-blue-950 font-semibold hover:underline'>Faça login</Link>
        </p>
      </form>
    </div>
  );
}