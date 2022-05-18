import React from "react";

const ShoppingBasket = ({theShoppingBasket}) => {

    return (
        <>
        <hr></hr>
        <h1> Shopping Basket </h1>
        
            <p>
                {theShoppingBasket}
            </p>
        </>

    )
}

export default ShoppingBasket