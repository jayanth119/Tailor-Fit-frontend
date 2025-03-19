import React, { Children } from "react";
import { cn } from "../../utilities/cn";

function CardConatiner({className,children,...props}){
    return(
        <div className={cn("w-auto h-auto flex flex-col justify-start items-center px-2 rounded-xl lg:rounded-md border border-[#C2C1C5]",className)} {...props}>
            {children}
        </div>
    );
}

function CardTitle({className,children,...props}){
    return(
        <h1 className={cn("w-full h-auto font-urbanist font-semibold text-left text-xl text-[#1D1C22] text-wrap",className)} {...props}>
            {children}
        </h1>
    );
}

function CardSubTitle({className,children,...props}){
    return(
        <p className={cn("w-full h-auto font-urbanist font-medium text-left text-lg text-[#46454C] text-wrap",className)} {...props}>
            {children}
        </p>
    )
}

function CardImage({className,children,image,altName,...props}){
    return(
        <img className={cn("w-full object-contain rounded-sm",className)} src={image} alt={altName} {...props}/>
    )
}

function CardBody({className,children,...props}){
    return(
        <div className={cn("w-full h-auto flex flex-col justify-start items-center gap-2",className)} {...props}>
            {children}
        </div>
    )
}

export {CardConatiner,CardBody,CardImage,CardTitle,CardSubTitle};