import styles from '@/components/article/article.module.css'

export default function Article(){
    return (
        <>
        <div className={styles.container}>
            <h1>TITULO</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit sunt harum omnis.</span>
            <div>20-02-2024</div>
        </div>
        </>
    )
}