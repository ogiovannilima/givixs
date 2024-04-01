import { RiMapPin3Line } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Article from '@/components/article/article'
import Avatar from "@/components/avatar/Avatar";
import { ArticleProps } from '@/components/article/article'

import styles from '@/(home)/page.module.css'

export default function Home() {
  const githubUrl = 'https://github.com/ogiovannilima'
  const linkedinUrl = 'https://www.linkedin.com/in/giovannilimaa/'

  const articles: ArticleProps[] = [
    {
      id: 1,
      title: 'Login Page',
      description: "It's a Login Page Example, built with reactjs + zustand + keycloak",
      tag: ['#react', '#zustand', '#keycloak']
    },
    {
      id: 2,
      title: 'Image Slider',
      description: "It's a Image Slider Example, built with reactjs + tailwind",
      tag: ['#react', '#tailwind']
    },
    {
      id: 3,
      title: 'Login Page',
      description: "It's a Login Page Example, built with reactjs + zustand + keycloak",
      tag: ['#react', '#zustand', '#keycloak']
    },
    {
      id: 4,
      title: 'Image Slider',
      description: "It's a Image Slider Example, built with reactjs + tailwind",
      tag: ['#react', '#tailwind']
    },
    {
      id: 5,
      title: 'Login Page',
      description: "It's a Login Page Example, built with reactjs + zustand + keycloak",
      tag: ['#react', '#zustand', '#keycloak']
    },
    {
      id: 6,
      title: 'Image Slider',
      description: "It's a Image Slider Example, built with reactjs + tailwind",
      tag: ['#react', '#tailwind']
    },
    {
      id: 7,
      title: 'Login Page',
      description: "It's a Login Page Example, built with reactjs + zustand + keycloak",
      tag: ['#react', '#zustand', '#keycloak']
    },
    {
      id: 8,
      title: 'Image Slider',
      description: "It's a Image Slider Example, built with reactjs + tailwind",
      tag: ['#react', '#tailwind']
    }
  ]

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
            <a target="_blank" href={linkedinUrl}>
              <FaLinkedin />
            </a>
          </nav>
        </div>
      </section>

      <div className={styles.boxArticle}>
        <h1>WORK</h1>
        <div className={styles.boxCardArticle}>
          {articles.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                description={article.description}
                tag={article.tag} />
            )
          })}
        </div>
      </div>

    </main>
  );
}
