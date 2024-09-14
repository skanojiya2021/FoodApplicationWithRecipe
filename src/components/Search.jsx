import React, { useEffect, useState } from 'react'
const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const API_Key = '1eb4ac5e559e45449bbbdd51e607b60d'
import styles from './search.module.css'
export default function Search({fooddata, setFoodData}) {
    const [query, setQuery] = useState('pasta')
   
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_Key}`)
            const data = await res.json()
            setFoodData(data.results)
        }
        fetchFood()
    }, [query])
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input}
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.query)}
            ></input>
        </div>
    )
}
