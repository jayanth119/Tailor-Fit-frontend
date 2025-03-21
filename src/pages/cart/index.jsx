import React from "react";
import MainLayout from "../../components/layout/mainlayout";
import CartLeft from "../../components/cart/CartLeft";
import CartRight from "../../components/cart/CartRight";
const Cart=()=>{
    const items=[
        {
            id:1,
            product_pic:'https://frenchcrown.in/cdn/shop/files/779_2.jpg?v=1740131420&width=800',
            name:'Shirt',
            quantity:2,
        },
        {
            id:2,
            product_pic:'image',
            name:'Shirt',
            quantity:2,
        },
        {
            id:3,
            product_pic:'image',
            name:'Shirt',
            quantity:2,
        }
    ]
    return(
        <MainLayout>
            <div className="flex flex-row w-full h-screen">
            <CartLeft items={items}/>
            <CartRight/>
        </div>
        </MainLayout>
    )
};
export default Cart;