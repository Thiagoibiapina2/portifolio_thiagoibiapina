import { useState } from 'react';
import styles from '../src/styles/imagemcomtexto.module.css';

import Image from 'next/image';

function ImagemComTexto({ src, alt, texto, informacoes, isAnyInfoOpen, onInfoOpen, onInfoClose}) {
  const [hover, setHover] = useState(false);
  const [showInfo, setShowInfo] = useState(false)


  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    if (!isAnyInfoOpen) {
      setShowInfo(true);
      onInfoOpen();
    }
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setShowInfo(false);
    onInfoClose();
  };

  return (
    <div
      className={styles.imagem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={src} alt={alt} />
      {hover && <div className={styles.texto}>{texto}</div>}
      {showInfo && (
        <div className={styles.informacoesContainer} onClick={handleClose}>
          <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            <div className={styles.top}>
              <div className={styles.video}>
                <iframe src={informacoes.video} alt={alt}></iframe> 
              </div>
              <div className={styles.info}>
                <div className={styles.title}>
                  <h2>{informacoes.title}</h2>
                  <button className={styles.closeButton} onClick={handleClose}>
              X
            </button>
                </div>
                <p>{informacoes.description}</p>
              </div>
            </div>
            <div className={styles.links}>
              <a href={informacoes.site} target="_blank">Acessar Projeto</a>
              <a href={informacoes.repository} target="_blank">Acessar repositorio</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagemComTexto;
