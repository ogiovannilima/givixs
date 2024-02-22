import Image from 'next/image'
import { RiMapPin3Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import Article from '@/components/article/page'

import styles from '@/(pages)/(home)/page.module.css'
import Portrait from '../../../../public/portrait.jpg'

export default function Home() {
  const githubUrl = 'https://github.com/ogiovannilima'
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <article className={styles.card}>
          <figure className={styles.teste}>
            <Image src={Portrait} alt="portrait photo" />
            <div className={styles.overlay}></div>
          </figure>
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
        </article>
      </section>
      <Article />
    </main>
  );
}
