import React from 'react'
import FoodItem from './FoodItem'

export default function FoodList({foodata, setFoodId}) {
  return (
    <div>
       {foodata.map((food) => 
     <FoodItem setFoodId={setFoodId} key={food.id} food ={food} />
    )}
    </div>
  )
}
