import React from 'react'
import styles from './fooditem.module.css'
export default function FoodItem({food, setFoodId}) {
  return (
    <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image}></img>
       <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
       </div>
       <div className={styles.buttonCantainer}>
       <button onClick={()=> 
       {
        setFoodId(food.id)
       }} className={styles.itemButton}>View Recipe</button>
       </div>
        
    
    <div></div>
    </div>
  )
}
