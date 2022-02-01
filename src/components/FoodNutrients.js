import React from 'react';

const FoodNutrients = (props) => {
    const {item} = props;
    return(
        <div>
            <p>{item.name}: {item.number} {item.unitName}</p>
        </div>
    )
}
export default FoodNutrients;