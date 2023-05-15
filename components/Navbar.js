import styles from'../src/styles/Navbar.module.css'

export default function Navbar() {
    return(
        <div className='header on'>
        <div className={styles.titulo}>
        <h1>Portifolio</h1>
        </div>

        <div className='menu_toggle'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
        </div>
        <nav>
        <ul>
            <li>
                <a href="#perfil">inicio</a>
            </li>
            <li>
                <a href="#about_me">Sobre</a>
            </li>
            <li>
                <a href="#skills">Habilidades</a>
            </li>
            <li>
                <a href="#projects">projetos</a>
            </li>
            <li>
                <a href="#contacts">contatos</a>
            </li>
        </ul>
        </nav>
    </div>
    )
}