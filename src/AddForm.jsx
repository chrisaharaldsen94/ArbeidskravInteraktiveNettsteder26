import { useState } from 'react'

export default function AddForm({ setShoppingList }) {
    const [newItem, setNewItem] = useState({ name: "", amount: "" })
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewItem((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Validerer at begge feltene må være fylt.
        if (!newItem.name && !newItem.amount) {
            setError("Fyll ut en vare og antall.")
            return
        } else {
            if (!newItem.name ){ 
                setError("Fyll ut en vare.")
        } else {
            if (!newItem.amount){
                 setError("Fyll ut antall.")
        } else {

        const itemToAdd = {
            id: crypto.randomUUID(),
            name: newItem.name,
            amount: parseInt(newItem.amount), 
            bought: false
        }

        // Her gjør den slik at nyeste varen legges øverst i listen.
        setShoppingList((prev) => [itemToAdd, ...prev])


        }}}}

    return (
        <section className="todoform">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Vare</label>
                <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="F.eks. Egg.."
                    value={newItem.name}
                    onChange={handleChange}
                />

                <label htmlFor="amount">Antall</label>
                <input
                    name="amount"
                    type="number"
                    id="amount"
                    min="1"
                    value={newItem.amount}
                    onChange={handleChange}
                />
                
                <button type="submit">Legg til vare</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </section>
    )
}