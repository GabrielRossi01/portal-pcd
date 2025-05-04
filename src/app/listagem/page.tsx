'use client'

import { TipoListagem } from '@/types/TipoListagem';
import React, { useState } from 'react'
import { FaStethoscope, FaGavel, FaBriefcase, FaGraduationCap, FaBus, FaUsers, FaTools, FaExclamationTriangle } from 'react-icons/fa' // Importando os ícones do react-icons

// Lista de serviços com títulos, conteúdo e ícone
const servicos: TipoListagem[] = [
  {
    titulo: "Serviços de Saúde e Reabilitação",
    conteudo: "Informações sobre hospitais especializados, clínicas de reabilitação, terapias e centros de referência para PCDs.",
    icon: <FaStethoscope className="text-blue-950 text-3xl mb-3" />,
  },
  {
    titulo: "Benefícios e Direitos",
    conteudo: "Orientações sobre o BPC/LOAS, isenções fiscais, passe livre, prioridade em serviços, entre outros direitos legais.",
    icon: <FaGavel className="text-blue-950 text-3xl mb-3" />,
  },
  {
    titulo: "Emprego e Profissionalização",
    conteudo: "Programas de inclusão no mercado de trabalho, capacitação profissional e vagas afirmativas.",
    icon: <FaBriefcase className="text-blue-950 text-3xl mb-3" />,
  },
  {
    titulo: "Educação Inclusiva",
    conteudo: "Escolas com atendimento especializado, salas de recurso, materiais adaptados e políticas públicas de inclusão.",
    icon: <FaGraduationCap className="text-blue-950 text-3xl mb-3" />,
  },
  {
    titulo: "Acessibilidade Urbana e Mobilidade",
    conteudo: "Soluções de mobilidade, adaptações em transporte público, acessos em vias públicas e edifícios.",
    icon: <FaBus className="text-blue-950 text-3xl mb-3" />,
  },
  {
    titulo: "Comunidades e Apoio Psicológico",
    conteudo: "Grupos de apoio, atendimento psicológico gratuito, redes de convivência e suporte emocional.",
    icon: <FaUsers className="text-blue-950 text-3xl mb-3" />,
  },
  {
    titulo: "Produtos e Tecnologia Assistiva",
    conteudo: "Cadeiras de rodas, softwares leitores de tela, próteses, dispositivos de comunicação alternativa e muito mais.",
    icon: <FaTools className="text-blue-950 text-3xl mb-3" />,
  },
  {
    titulo: "Denúncias e Reclamações",
    conteudo: "Canais para denunciar discriminação, falta de acessibilidade, abuso de direitos e maus-tratos.",
    icon: <FaExclamationTriangle className="text-blue-950 text-3xl mb-3" />,
  },
];

export default function Listagem() {

  // Estado que armazena o índice do serviço ativo (ou null se nenhum serviço estiver ativo)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen py-16 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-white mb-10 text-center">Serviços Disponíveis</h1>

      {/* Grid responsivo com os botões dos serviços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {servicos.map((servicos, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="text-left bg-gradient-to-br from-purple-300 to-blue-200 hover:bg-blue-50 transition rounded-xl shadow-md p-6 cursor-pointer duration-500 transform hover:scale-105"
          >
            <div className="flex flex-col items-start">
              {servicos.icon}
              <h2 className="text-lg font-semibold text-blue-900 mb-2">{servicos.titulo}</h2>
              <p className="text-sm text-gray-600">Clique para saber mais.</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal de exibição do serviço selecionado*/}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/50 backdrop-blur-md w-full max-w-lg p-6 rounded-xl shadow-lg relative border border-white/20">
            <button
              className="absolute top-4 right-4 text-blue-950 font-bold text-lg cursor-pointer hover:text-red-500 transition duration-300"
              onClick={() => setActiveIndex(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{servicos[activeIndex].titulo}</h2>
            <p className="text-gray-700">{servicos[activeIndex].conteudo}</p>
          </div>
        </div>
      )}
    </div>
  )
}