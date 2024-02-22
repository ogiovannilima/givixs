import { BsBalloonFill } from "react-icons/bs";
import styles from '@/components/navbar/page.module.css'

export default function NavBar() {
    return (
        <div className={styles.container}>
            <span className={styles.title}>WORK</span>
            <span>
                <BsBalloonFill className={styles.icon}/>
            </span>
            <span className={styles.title}>CONTACT</span>
        </div>
    )
}