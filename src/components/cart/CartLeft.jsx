import Item from "./item";
const CartLeft=({items})=>{
    return(
        <div className="w-1/2 h-full bg-slate-500 pt-16 p-3 gap-3 border-black flex flex-col justify-start ">
            <ul>
                {items.map(item=>(
                    <li key={item.id}>
                        <Item item={item}/>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}
export default CartLeft;