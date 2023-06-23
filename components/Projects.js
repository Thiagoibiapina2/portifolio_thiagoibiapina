import Head from 'next/head'

import styles from '../src/styles/Projects.module.css'

import { useState } from 'react';

import ImagemComTexto from './ImagemComTexto';


const imagens = [
  {
    src: '/projects/rick&morty.jpg',
    alt: 'Descrição da imagem 1',
    texto: 'Rick and Morty',
    informacoes: {
      title: 'Rick and Morty',
      description: `O site é uma aplicação interativa que mostra informações dos personagens da serie Rick and morty através  de uma Api\n

      Adicionei funcionalidades como:\n
      • Projeto feito em Nextjs
      • Utilizado conceitos de Api REST
      • Estilização feita em Css
      • Utilizado conceitos de rotas dinamicas
      • Api utilizada - https://rickandmortyapi.com
      • Utilizado React Pagination`, 
      video: '/projects/video1.mp4',
      repository: 'https://github.com/Thiagoibiapina2/rick-morty_nextjs',
      site: 'https://rick-morty-nextjs-1ytx7gz98-thiagoibiapina2.vercel.app/'
    }
    
  },
  {
    src: '/projects/nextauth.jpg',
    alt: 'next-auth',
    texto: 'Next-Auth',
    informacoes: {
      title: 'Next-Auth',
      description: `O site é uma aplicação interativa que  simula o login e autenticação para acessar um site, utilizando Nexth-Auth\n

      Adicionei funcionalidades como:\n
      • Utilizado Next-auth
      • Utilizado TypeScript
      • Estilizado com tailwind CSS
      • Criando uma rota para quando o cadastro for feito`, 
      video: '/projects/video4.mp4',
      repository: 'https://github.com/Thiagoibiapina2/nextauth-2023',
      site: 'https://nextauth-2023.vercel.app/'
    }
    ,
  },
  {
    src: '/projects/hookform.jpg',
    alt: 'Descrição da imagem 2',
    texto: 'Form - Hook Form',
    informacoes: {
      title: 'Form - Hook Form',
      description: `O Form  é uma aplicação interativa que  simula o cadastro em um site, que utiliza conhecimento do hook Form!\n

      Adicionei funcionalidades como:\n
      • Utilizado Hook form
      • Feito validação dos campos do formulario
      • Estilizado com CSS
      • Adicionado responsividade`, 
      video: '/projects/video2.mp4',
      repository: 'https://github.com/Thiagoibiapina2/hook_form',
      site: 'https://hook-form-murex.vercel.app/'
    }
    ,
  },
  {
    src: '/projects/buscador_cep.jpg',
    alt: 'Descrição da imagem 3',
    texto: 'Buscador de Cep',
    informacoes: {
      title: 'Buscador de CEP',
      date: '24 de Outubro de 2021',
      description: `O Buscador de Cep é uma aplicação interativa que mostra informações do CEP através de uma API \n

      Funcionalidades como:\n
      • Input que guarda as informações digitadas e vai na Api e retorna os valores
      • feito as Validações necessárias
      • Estilização com CSS 
      • Api utilizada - https://viacep.com.br`, 
      video: '/projects/video3.mp4',
      repository: 'https://github.com/Thiagoibiapina2/buscador_de_cep',
      site: 'https://buscador-de-cep-beige-five.vercel.app/'
    }
  },
];

function Project() {

  const [isAnyInfoOpen, setIsAnyInfoOpen] = useState(false);

  const handleInfoOpen = () => {
    setIsAnyInfoOpen(true);
  };

  const handleInfoClose = () => {
    setIsAnyInfoOpen(false);
  }


  return (
    <div id='projects'  className={styles.cards_boxs}>
    <h2 className={styles.title}>Projetos</h2>
    <div className={styles.container}>
      {imagens.map((imagem) => (
        <ImagemComTexto
          key={imagem.title}
          src={imagem.src}
          alt={imagem.alt}
          texto={imagem.texto}
          informacoes={imagem.informacoes}
          onInfoOpen={handleInfoOpen} 
          onInfoClose={handleInfoClose} 
          isAnyInfoOpen={isAnyInfoOpen}
        />
      ))}
    </div>
    </div>
  );
}

export default Project;