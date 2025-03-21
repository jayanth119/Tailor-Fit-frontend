const Item=({item})=>{
    return(
        <div className="flex flex-row bg-slate-300 border-gray-600 border-b-2 w-3/4 h-1/4">
            <div className="">{/*image*/}
                <img src={item.product_pic} alt={item.name} className="w-30 h-40"/>
            </div>
        </div>
    )
}
export default Item;