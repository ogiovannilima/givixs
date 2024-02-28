import Image from 'next/image'

import Portrait from '../../../../public/portrait.jpg'

import styles from '@/components/avatar/avatar.module.css'

export default function Avatar() {
    return (
        <div className={styles.imageProfile}>
            <Image src={Portrait} alt="portrait photo" />
            <div className={styles.overlay} />
        </div>
    )
}