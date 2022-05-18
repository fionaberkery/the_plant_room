import React from "react";
import PlantItem from "./PlantItem";


const PlantList = ({plants, onImageClick}) => {

  

    const plantsList = plants.map((plant, index) => {
        return <PlantItem key={index} plant={plant} onImageClick={onImageClick} />
    })

    return (

        <ul>
        {plantsList}
        </ul>
    )
}

export default PlantList