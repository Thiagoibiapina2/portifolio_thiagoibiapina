import styles from '../src/styles/Skills.module.css'

import Image from "next/image"

export default function Skills() {
    return(
        <div id="skills" class={styles.container_skills}>
        <h2>Habilidades</h2>
    <div className={styles.cards}>
    <div className={styles.box}>
        <p>HTML5</p>
        <Image src="/skills/html.svg" width="100" height="100" alt="html" />
    </div>

    <div className={styles.box}>
        <p>CSS3</p>
        <Image src="/skills/css.svg" width="100" height="100" alt="CSS3" />
    </div>
    <div className={styles.box}>
        <p>JavaScript</p>
        <Image src="/skills/javascript.svg" width="100" height="100" alt="JavaScript" />
    </div>
    <div className={styles.box}>
        <p>TypeScript</p>
        <Image src="/skills/typescript.svg" width="100" height="100" alt="TypeScript" />
    </div>
    <div className={styles.box}>
        <p>React.js</p>
        <Image src="/skills/react.svg" width="100" height="100" alt="React" />
    </div>
    <div className={styles.box}>
        <p>Node.js</p>
        <Image src="/skills/nodejs.svg" width="100" height="100" alt= "NodeJs" />
    </div>
    <div className={styles.box}>
        <p>GIT</p>
        <Image src="/skills/git.svg" width="100" height="100" alt="GIT" />
    </div>
   
   
   
</div>
</div>
    )
}