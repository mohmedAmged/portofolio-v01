/* eslint-disable react/prop-types */
import styles from './myHeader.module.css'
export default function MyHeader({ title, subTitle }) {
    return (
        <div className={`${styles.headerSec__handler}`}>
            <p>
                {title}
            </p>
            <h2>
                {subTitle}
            </h2>
        </div>
    )
}
