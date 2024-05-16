import styles from '@/components/article/article.module.css'

import { ArticleProps } from '@/utils/types'

export default function Article(articles: ArticleProps) {
    return (
        <>
            <div className={styles.container}>
                <h1>{articles.title}</h1>
                <span>{articles.description}</span>
                <div>
                    {articles.tag.map((tag) => {
                        return (
                            <a key={tag} href="#">{tag}</a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}