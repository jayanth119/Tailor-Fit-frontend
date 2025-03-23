import Item from "./item";
import ButtonDef from "../ui/ButtonDef";
const CartLeft=({items})=>{
    return(
        <div className="relative w-1/2 bg-slate-500 p-2 gap-4 flex flex-col h-screen overflow-y-scroll remove-scroll">
            <ul className="gap-2 flex flex-col">
                {items.map(item=>(
                    <li key={item.id}>
                        <Item item={item}/>
                    </li>
                ))}
            </ul>
            <div className="w-full flex justify-end gap-10 sticky z-10">
                <ButtonDef text="Bill" className="bg-green-500 hover:bg-green-600"/> {/*Click to bill*/}
                <ButtonDef text="Back to Home" className="bg-red-300 hover:bg-red-400"/>
            </div>
        </div>

        
    )
}

export default CartLeft;