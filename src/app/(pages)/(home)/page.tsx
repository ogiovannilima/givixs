import { RiMapPin3Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import Article from '@/components/article/article'
import Avatar from "@/components/avatar/Avatar";

import styles from '@/(pages)/(home)/page.module.css'

export default function Home() {
  const githubUrl = 'https://github.com/ogiovannilima'

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.card}>
          <Avatar />
          <div className={styles.infos}>
            <h1 className={styles.name}>Giovanni Lima</h1>
            <p className={styles.role}>Software Engineer</p>
            <address className={styles.location}>
              <RiMapPin3Line />
              São Paulo, BR
            </address>
          </div>
          <nav className={styles.network}>
            <a target="_blank" href={githubUrl}>
              <FaGithub />
            </a>  
          </nav>
        </div>
      </section>
      <div>
      <Article />
      <Article />
      </div>
    </main>
  );
}
