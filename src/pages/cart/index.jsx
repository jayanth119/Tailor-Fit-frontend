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
            info:'Try This Men Solid Casual White Shirt',
            size:'M',
            type:'Cloth',


            price:500,
        },
        {
            id:2,
            product_pic:'https://frenchcrown.in/cdn/shop/files/779_2.jpg?v=1740131420&width=800',
            name:'Shirt',
            quantity:2,
            info:'Try This Men Solid Casual White Shirt',
            size:'M',
            type:'Cloth',
            price:500,
        },
        {
            id:3,
            product_pic:'https://frenchcrown.in/cdn/shop/files/779_2.jpg?v=1740131420&width=800',
            name:'Shirt',
            quantity:2,
            info:'Try This Men Solid Casual White Shirt',
            size:'M',
            type:'Cloth',
            price:500,
        },
        {
            id:4,
            product_pic:'https://frenchcrown.in/cdn/shop/files/779_2.jpg?v=1740131420&width=800',
            name:'Shirt',
            quantity:2,
            info:'Try This Men Solid Casual White Shirt',
            size:'M',
            type:'Cloth',
            price:500,
        },
        {
            id:5,
            product_pic:'https://frenchcrown.in/cdn/shop/files/779_2.jpg?v=1740131420&width=800',
            name:'Shirt',
            quantity:2,
            info:'Try This Men Solid Casual White Shirt',
            size:'M',
            type:'Cloth',
            price:500,
        }
    ]
    return(
        <MainLayout>
            <div className="flex flex-row w-full h-auto pt-16">
            <CartLeft items={items}/>
            <CartRight/>
        </div>
        </MainLayout>
    )
};
export default Cart;