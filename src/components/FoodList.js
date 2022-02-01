import React from 'react';
import FoodItem from './FoodItem';
import { connect } from 'react-redux';


const FoodList = (props) => {
    const { foods, loading } = props;

    if (loading) {
        return <h1>Loading...</h1>;
    }


return (
    <div>
        <h3>Food List</h3>
        <div>
            {
                foods.map((food, id) => {
                    console.log('food', food);
                    return (
                        <FoodItem food={food} key={id} />
                    )
                })
            }
        </div>
    </div>


)

}

const mapStateToProps = (state) => {
    return {
        foods: state.foods,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(FoodList);