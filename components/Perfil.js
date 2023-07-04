import Image from 'next/image'

import styles from '../src/styles/Perfil.module.css'

export default function Perfil() {
    return(
        <div id="perfil" className={styles.container}>
        <div className={styles.banner}>
        <div className={styles.intro}>
        <div className={styles.title}>
            <h1>Olá, eu sou o </h1>
            <span>Thiago aguiar</span>
            <p>Desenvolvedor Front-end</p>
        </div>
        <div className={styles.actions}>
            <a className={styles.btn1} type="text" href="/documents/Currículo thiago2023.pdf">Curriculo</a>
            <a className={styles.btn2}type="text" href="mailto:thiago.aguiar879@gmail.com" target="_blank">Entrar em contato</a>
        </div>
        </div>
  
        <div className={styles.profile}>
            <a href="https://github.com/Thiagoibiapina2" target="_blank">
               <Image src="https://avatars.githubusercontent.com/u/117371494?v=4" width="300" height="300" alt="avatar" />
            </a>
        </div>
    </div>
        <div  id="about_me" className={styles.about_me}>
            <h2>Sobre mim</h2>
            <p>
                Meu nome é Thiago e sou apaixonado pelo Desenvolvimento web, que dicidiu trilhar o caminho da programação, com
                conhecimento  React.js, Next.js, JavaScript, TypeScript, e consumo de APIs REST. criação de componentes reutilizáveis.
                gosto muito de aprender novas tecnologias novas  e sempre me manter atualizado dentro desse mercado
              </p>
        </div>
    </div>
    )
}