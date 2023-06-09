import React, { useState } from 'react';

import Image from 'next/image';

function Imagem() {
  const [exibirVerMais, setExibirVerMais] = useState(false);

  function handleClickVerMais() {
    // Coloque aqui o código para exibir mais informações
  }

  return (
    <div style={{ position: 'relative' }}    className='k'>
      <Imagem
        className='imagem'
        src="/eu.jpg"
        alt="Descrição da imagem"
        onMouseEnter={() => setExibirVerMais(true)}
        onMouseLeave={() => setExibirVerMais(false)}
      />
      <div className={`ver-mais${exibirVerMais ? ' exibir' : ''}`}>
        <button onClick={handleClickVerMais}>Ver mais</button>
      </div>
      </div>
      )}
      

      export default Imagem