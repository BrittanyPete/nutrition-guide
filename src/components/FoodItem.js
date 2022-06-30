import React, { useState } from 'react';
import FoodNutrients from './FoodNutrients';

const FoodItem = (props) => {
    const [infoOn, setInfoOn] = useState(false);
    const { food } = props;
    const nutrients = food.foodNutrients;

    const toggleInfo = () => {
        setInfoOn(!infoOn)
    };

    return(
        <div className='card'>
            <div className='cardBody'>
                <h3 className='cardTitle'>{food.description}</h3>
                <button id='toggleInfo' className='nutritionBtn' onClick={toggleInfo}>
                    {infoOn ? 'Hide Nutrition Info' : 'Nutrition Info'}
                </button>
                {
                    infoOn && <div>
                    {
                        nutrients.map((item, id) => {
                            return (
                                <FoodNutrients item={item} key={id} />
                            )
                        })
                    }
                </div>
                }
            </div>
        </div>
    )
}

export default FoodItem;