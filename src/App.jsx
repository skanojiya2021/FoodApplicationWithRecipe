import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList'
import Nav from './components/Nav'
import Container from './components/Container'
import './app.css'
import InnerContainer from './components/InnerContainer'
import FoodDetail from './components/FoodDetail'
function App() {
  const [foodata,setFoodData] = useState([])
  const [foodId, setFoodId] = useState('658615')
  return (
    <div className="App">
      <Nav />
    <Search foodata={foodata} setFoodData={setFoodData} />
  <Container>
    <InnerContainer>
    <FoodList setFoodId ={setFoodId} foodata={foodata}/>
    </InnerContainer>
  <InnerContainer>
    <FoodDetail foodId={foodId} />
  </InnerContainer>
  </Container>
  
    </div>
  )
}

export default App
