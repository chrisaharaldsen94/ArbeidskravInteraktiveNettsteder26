//Gjenbruk av ''Todo'' som vi har gjort i forelesning
//Hjelp til veiledning av AI-Google Gemini [https://gemini.google.com/share/5cc7ccc20856]
//Hjelp til validering ved hjelp av Google Gemini [https://gemini.google.com/share/f20e79432c2c]

import { useState } from 'react'
import AddForm from './AddForm'
import ShoppingList from './ShoppingList'
import './App.css'

function App() {
  //Starter med minst 2 varer der en er markert som allerede kjøpt.
  const initialItems = [
    { id: crypto.randomUUID(), name: "Melk", amount: 2, bought: false },
    { id: crypto.randomUUID(), name: "Egg", amount: 1, bought: true }
  ]

  const [shoppingList, setShoppingList] = useState(initialItems)

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm setShoppingList={setShoppingList} />
      <ShoppingList shoppingList={shoppingList} setShoppingList={setShoppingList} />
    </main>
  )
}

export default App