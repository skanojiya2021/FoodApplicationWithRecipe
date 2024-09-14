import React, { useEffect, useState } from 'react'
import styles from './fooddetails.module.css'
import ItemList from './ItemList'
export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({})
  const [isLoading, setisLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_Key = '1eb4ac5e559e45449bbbdd51e607b60d'
  useEffect(() => {
    return async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_Key}`).then(res => res.json())
      console.log(res)
      setFood(res)
      setisLoading(false)
    }
  }, [foodId])
  return (
    <div >
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img key={food.id} className={styles.recipeImg} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{food.readyInMinutes} Mintus</strong>
          </span>
          <span> <strong>👪Serves{food.servings} </strong></span>
          <span><strong>
            {food.vegetarian ? 'vegetarian' : 'Non vegetarian'}</strong>
          </span>
          <span><strong>{food.vegan ? 'Vegan' : ''}</strong></span>
        </div>
        <div><strong>
          ${food.pricePerServing / 100} Per Serving
          </strong></div>
     <h2>Ingredients</h2>
    <ItemList food={food} isLoading={isLoading}/>
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (<p>Loading...</p>) :
            (food.analyzedInstructions[0].steps.map((step) =>
              (<li key={step.id}>{step.step}</li>)))}
        </ol>
      </div>
      </div>
    </div>
  )
}
