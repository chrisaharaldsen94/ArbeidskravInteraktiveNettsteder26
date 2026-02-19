export default function ShoppingItem({ item, setShoppingList }) {
    
    //Funksjon for å endre status på "kjøpt"
    const handleCheck = () => {
        setShoppingList((prev) => 
            prev.map((i) => i.id === item.id ? { ...i, bought: !i.bought } : i)
        )
    }

    //Funkjson for å direkte endre antall i listen
    const handleAmountChange = (e) => {
        const newAmount = parseInt(e.target.value)
        if (newAmount > 0) {
            setShoppingList((prev) => 
                prev.map((i) => i.id === item.id ? { ...i, amount: newAmount } : i)
            )
        }
    }

    return (
        <article className="shopping-item">
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