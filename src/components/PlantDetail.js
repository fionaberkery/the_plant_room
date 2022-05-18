import React from "react";

const PlantDetail = ({selectedPlant, onGoBackClick}) => {

    const handleGoBack = () => {
        onGoBackClick()
    }

    return (

        <>
            <div>
                <button onClick={handleGoBack}> Go back </button>
                
                <img src={selectedPlant.image} width="100px" height="100px"/>
                <h2>{selectedPlant.name}</h2>
                <p>Price : {selectedPlant.price}</p>
                <p>Pet Friendly :{selectedPlant.pet_friendly}</p>
                <p>Description : {selectedPlant.description.text}</p>
                <p>Height :{selectedPlant.description.height}</p>
                <p>Pot size :{selectedPlant.description.pot_size}</p>
            </div>

        <button> Add to basket </button>

        </>

    )
}

export default PlantDetail