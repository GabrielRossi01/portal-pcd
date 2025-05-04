'use client'

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function UpdatePage() {
  const [userData, setUserData] = useState({
    email: '',
    senha: '',
  });

  const [notification, setNotification] = useState<string | null>(null);
  const [, setError] = useState<string | null>(null);

  // Carrega os dados salvos no localStorage ao abrir a página
  // useEffect(() => {
  //   const dadosSalvos = localStorage.getItem('userData');
  //   if (dadosSalvos) {
  //     setUserData(JSON.parse(dadosSalvos));
  //   }
  // }, []);

  // Remove a notificação após 3 segundos
  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [notification]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userData.email || !userData.senha) {
      setError('Por favor, preencha ambos os campos.');
      setNotification(null);
      return;
    }

    try {
      localStorage.setItem('userData', JSON.stringify(userData)); // converte um objeto JavaScript para uma string JSON
      setNotification('Dados atualizados com sucesso!');
      setError(null);
      setUserData({ email: '', senha: '' }); // limpa os campos
    } catch (error) {
      setError('Erro ao atualizar dados!');
      setNotification(null);
    }
  };

  return (
    <div className="min-h-screen py-16 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-white mb-10 text-center">Atualize seus Dados</h1>

      {notification && (
        <div className="bg-gradient-to-br from-purple-300 to-blue-200 text-white font-bold p-4 mb-6 rounded-lg text-center">
          {notification}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-gradient-to-br from-purple-300 to-blue-200 p-10 rounded-xl shadow-lg w-full max-w-2xl m-auto">
        <div className="mb-4 flex items-center border border-blue-950 p-2 rounded w-full max-w-sm">
          <FaEnvelope className="text-blue-950 text-2xl mr-3" />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            aria-label="E-mail"
            className="w-full border-none outline-none"
          />
        </div>

        <div className="mb-4 flex items-center border border-blue-950 p-2 rounded w-full max-w-sm">
          <FaLock className="text-blue-950 text-2xl mr-3" />
          <input
            type="password"
            name="senha"
            value={userData.senha}
            onChange={handleChange}
            placeholder="Senha"
            required
            aria-label="Senha"
            className="w-full border-none outline-none"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-950 text-white p-2 rounded cursor-pointer hover:bg-blue-900 w-full max-w-sm"
        >
          Atualizar Dados
        </button>
      </form>
    </div>
  );
}
