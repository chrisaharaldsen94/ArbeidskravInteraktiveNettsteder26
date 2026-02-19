export default function ShoppingItem({ item, setShoppingList }) {
    
    // Funksjon for å endre "kjøpt"-status
    const handleCheck = () => {
        setShoppingList((prev) => 
            prev.map((i) => i.id === item.id ? { ...i, bought: !i.bought } : i)
        )
    }

    // Funksjon for å endre antall direkte i listen
    const handleAmountChange = (e) => {
        const newAmount = parseInt(e.target.value)
        if (newAmount > 0) { // Forhindrer 0 eller negative verdier
            setShoppingList((prev) => 
                prev.map((i) => i.id === item.id ? { ...i, amount: newAmount } : i)
            )
        }
    }

    return (
        <article className="todo-card">
            <label>
                <input 
                    type="checkbox" 
                    checked={item.bought} 
                    onChange={handleCheck} 
                />
                <span>
                    {item.name}
                </span>
            </label>
            
            <input 
                type="number" 
                value={item.amount} 
                onChange={handleAmountChange} 
                min="1"
                style={{ width: "50px", marginLeft: "10px" }}
            />
        </article>
    )
}