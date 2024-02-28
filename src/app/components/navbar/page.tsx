import { BsBalloonFill } from "react-icons/bs";
import styles from '@/components/navbar/page.module.css'

export default function NavBar() {
    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <span className={styles.title}>WORK</span>
                <span>
                    <BsBalloonFill className={styles.icon} />
                </span>
                <span className={styles.title}>CONTACT</span>
            </div>
        </div>
    )
}