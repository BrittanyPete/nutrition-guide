import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchNutrients = () => {

    return(dispatch => {
        dispatch({type:FETCH_START});
        axios.get(`https://api.nal.usda.gov/fdc/v1/foods/list?api_key=PSnDveFPYlXYs4Fu7schdKxfUKx9sYlH6aL55Wtm`)
            .then(resp => {
                console.log('resp:', resp.data)
                dispatch({type: FETCH_SUCCESS, payload: resp.data})
            })
            .catch(err => {
                console.log('error:', err)
            })
    });
}

