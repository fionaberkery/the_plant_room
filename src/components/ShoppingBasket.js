import React from "react";

const ShoppingBasket = ({theShoppingBasket}) => {

    return (
        <>
        <h1> Shopping Basket </h1>
        <br></br><br></br><br></br>
            <p>
                {theShoppingBasket}
            </p>
        </>

    )
}

export default ShoppingBasket