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

        //Her gjør den slik at nyeste varen legges øverst i listen.
        setShoppingList((prev) => [itemToAdd, ...prev])

        //Fikk opp feilmelding når jeg testet
        //Med kun vare, og la til antall etterpå. Da ble ikke feilmeldingen borte.
        //Med setError("") så blir det en tom streng som gjør at det blir sendt på nytt.
        //La også til setNewItem slik at tekst boksen skal nullstille seg etter jeg la til vare.
        setError("")
        setNewItem({name: "", amount: ""})
       

        }}}}

    return (
        <section className="shopping-form">
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