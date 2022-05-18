import React from "react";



const PlantItem = ({plant, index, onImageClick}) => {

const handleClick = () => {
    onImageClick(plant)
}

    return (

        <p> {plant.name}
            {plant.price}
            <img onClick={handleClick} src={plant.image} width="100px" height="100px"/>
        </p>
    )
}

export default PlantItem