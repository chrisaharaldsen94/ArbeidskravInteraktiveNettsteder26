import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ shoppingList, setShoppingList }) {
    return (
        <section className="flex-r">
            <h2>Dine varer</h2>
            {shoppingList.map((item) => (
                <ShoppingItem 
                    key={item.id} 
                    item={item} 
                    setShoppingList={setShoppingList} 
                />
            ))}
        </section>
    )
}