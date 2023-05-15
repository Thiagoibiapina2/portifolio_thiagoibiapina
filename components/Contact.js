import Image from "next/image"

import styles from "../src/styles/Contact.module.css"

export default function Contact () {
    return (
        <div id="contacts" className={styles.contacts_box}>
        <h2>Contatos</h2>
        <div className={styles.icons}>
            <div className={styles.icon}>
                <a href="mailto:thiago.aguiar879@gmail.com" target="_blank">
                    <div className={styles.box_icon}>
                        <Image src="/contacts/gmail.svg" width="100" height="100" />
                    </div> 
                </a>
                <a href="mailto:thiago.aguiar879@gmail.com" target="_blank">
                    <p>Email</p>
                </a>
                <a href="mailto:thiago.aguiar879@gmail.com" target="_blank">
                    <p>Thiago.aguiar879@gmail.com</p>
                </a>
            </div>
            <div className={styles.icon}>
                <a>
                    <div className={styles.box_icon}>
                        <Image src="/contacts/telephone.svg" width="100" height="100"/>
                    </div> 
                </a>
                <a>
                    <p>Telefone</p>
                </a>
                <a>
                    <p>(92) 98115-5998</p>
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://www.linkedin.com/in/thiago-aguiar-335b6a186/" target="_blank">
                    <div class={styles.box_icon}>
                        <Image src="/contacts/linkedin.svg" width="100" height="100"/>
                    </div> 
                </a>
                <a href="https://www.linkedin.com/in/thiago-aguiar-335b6a186/" target="_blank">
                    <p>Linkedin</p>
                </a>
                <a href="https://www.linkedin.com/in/thiago-aguiar-335b6a186/" target="_blank">
                    <p>@ThiagoAguiar</p>
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://github.com/Thiagoibiapina2" target="_blank">
                    <div class={styles.box_icon}>
                        <Image src="/contacts/github.svg" width="100" height="100"/>
                    </div> 
                </a>
                <a href="https://github.com/Thiagoibiapina2" target="_blank">
                    <p>Github</p>
                </a>
                <a href="https://github.com/Thiagoibiapina2" target="_blank">
                    <p>@ThiagoIbiapina2</p>
                </a>
            </div>
        </div>
    </div>
    )
}