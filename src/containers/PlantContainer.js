import React, { useState } from "react";
import PlantList from "../components/PlantList";
import PlantDetail from "../components/PlantDetail";
import plant1 from "/Users/fionaberkery/CodeClan_work/week_8/day_3/all_day_lab/the_plant_room/src/images/plant1.webp"
import plant2 from "/Users/fionaberkery/CodeClan_work/week_8/day_3/all_day_lab/the_plant_room/src/images/plant2.webp"
import plant3 from "/Users/fionaberkery/CodeClan_work/week_8/day_3/all_day_lab/the_plant_room/src/images/plant3.webp"
import plant4 from "/Users/fionaberkery/CodeClan_work/week_8/day_3/all_day_lab/the_plant_room/src/images/plant4.webp"
import ShoppingBasket from "../components/ShoppingBasket";
import PlantItem from "../components/PlantItem";

const PlantContainter = () => {



    const [plants, setPlants] = useState([
        {
            id:1,
            name:"Alocasia Silver Dragon",
            image:plant1,
            price:"£30",
            pet_friendly:false,
            description:
                {
                    text:"This impressive, heavily veined beauty is a truly mesmerising plant which is very rarely seen. The unique leaves resemble 'dragon scale' and have soft white undersides. Alocasia is a member of the Arum family and is native to tropical regions of Asia.",
                    height:"30cm",
                    pot_size:"15cm+"
                }
            },
            {
                id:2,
                name:"Asplenium Crispy Wave",
                image:plant2,
                price:"£10",
                pet_friendly:true,
                description:
                    {
                        text:"Easy to look after and a must for every houseplant collection. Its upright rosette of sculptural wavy green leaves give a distinctive appearance.",
                        height:"25cm",
                        pot_size:"12cm+"
                    }
                },
                {
                    id:3,
                    name:"Dionaea muscipula",
                    image:plant3,
                    price:"£6.50",
                    pet_friendly:false,
                    description:
                        {
                            text:"Native to the subtropical wetlands of Carolina USA this captivating carnivorous plant uses its ‘trigger hairs’ on the inner surface to detect its prey.",
                            height:"7cm",
                            pot_size:"5.5cm+"
                        }
                    },
                    {
                        id:4,
                        name:"Hoya kerrii Variegata",
                        image:plant4,
                        price:"£19",
                        pet_friendly:true,
                        description:
                            {
                                text:"Very rarely found in a vine, this unique waxy heart-shaped Hoya has large leaves with creamy yellow borders. This succulent is a cherished addition to any unusual plant collection.",
                                height:"15cm",
                                pot_size:"10.5cm+"
                            }
                        }
        
    ])

    const [selectedPlant, setSelectedPlant] = useState(null)
    const [shoppingBasket, setShoppingBasket] = useState([])
    const [selectedBasket, setSelectedBasket] = useState(null)

    const handleViewBasket = () => {
        setSelectedBasket(true)}
        


    const onImageClick = (plant) => {
        setSelectedPlant(plant)
    }

    const onGoBackClick = () => {
        setSelectedPlant(null)
    }

    const onAddToBasket = (plant) => {
        const basketItems = [...shoppingBasket, plant]
        setShoppingBasket(basketItems)
    }

    const theShoppingBasket = shoppingBasket.map((item) => {
        return ( <p> {item} </p>)
    })


    
    
    return (
        <>
            <h1> The Plant Room </h1>

            <button onClick={handleViewBasket} > Go to Basket </button>
        
            
            

            {selectedPlant ? <PlantDetail onGoBackClick={onGoBackClick} selectedPlant={selectedPlant} setSelectedPlant={selectedPlant} onAddToBasket={onAddToBasket}/> : <PlantList plants={plants} onImageClick={onImageClick}/>}
            
            <ShoppingBasket theShoppingBasket={theShoppingBasket}/>

        </>
    )
}

export default PlantContainter