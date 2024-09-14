import React from 'react'
import styles from './item.module.css'
export default function Item({item}) {
    return (
        <div >
            <div className={styles.itemContainer}>
                <div className={styles.imgContainer}>
                <img
                className={styles.img}
                    src={
                        `https://img.spoonacular.com/ingredients_100x100/` + item.image
                    }
                    alt=''
                />
                </div>
                <div className={styles.nameContainer}>

                <div className={styles.name}>{item.name}</div>
                <div className={styles.amount}>{item.amount} {item.unit}</div>
                </div>
            </div>
        </div>
    )
}
