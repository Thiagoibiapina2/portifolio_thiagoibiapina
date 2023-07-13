import styles from '../src/styles/Skills.module.css'

import Image from "next/image"

export default function Skills() {
    return(
        <div id="skills" className={styles.container_skills}>
        <h2>Habilidades</h2>
    <div className={styles.cards}>
    <div className={styles.box}>
        <p>HTML5</p>
        <Image src="/skills/html.svg" width="80" height="60" alt="html" />
    </div>

    <div className={styles.box}>
        <p>CSS3</p>
        <Image src="/skills/css.svg" width="80" height="60" alt="CSS3" />
    </div>
    <div className={styles.box}>
        <p>JavaScript</p>
        <Image src="/skills/javascript.svg" width="80" height="60" alt="JavaScript" />
    </div>
    <div className={styles.box}>
        <p>TypeScript</p>
        <Image src="/skills/typescript.svg" width="80" height="60" alt="TypeScript" />
    </div>
    <div className={styles.box}>
        <p>React.js</p>
        <Image src="/skills/react.svg" width="80" height="60" alt="React" />
    </div>
    <div className={styles.box}>
        <p>Node.js</p>
        <Image src="/skills/nodejs.svg" width="80" height="60" alt= "NodeJs" />
    </div>
    <div className={styles.box}>
        <p>GIT</p>
        <Image src="/skills/git.svg" width="80" height="60" alt="GIT" />
    </div>
    <div className={styles.box}>
        <p>NextJS</p>
        <Image src="/skills/nextjs.svg" width="80" height="60" alt="NEXTJS" />
    </div>
    <div className={styles.box}>
        <p>Tailwind CSS</p>
        <Image src="/skills/tailwindcss.svg" width="80" height="60" alt="Tailwind CSS" />
    </div>
    <div className={styles.box}>
        <p>Express</p>
        <Image src="/skills/express.svg" width="80" height="60" alt="Express" />
    </div>
    <div className={styles.box}>
        <p>Prisma</p>
        <Image src="/skills/prisma.svg" width="80" height="60" alt="Prisma" />
    </div>
    <div className={styles.box}>
        <p>MongoDB</p>
        <Image src="/skills/m  ongodb.svg" width="80" height="60" alt="MongoDB" />
    </div>
   
   
   
</div>
</div>
    )
}