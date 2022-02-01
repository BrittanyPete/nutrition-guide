import './App.css';
import React, { useEffect } from 'react';
import FoodList from './components/FoodList';
import { connect } from 'react-redux';
import { fetchNutrients } from './actions';

function App(props) {

useEffect(() => {
  props.fetchNutrients();
}, []);

  return (
    <div className="App">
      <h1>Nutrition</h1>
      <div>
        <form>
          <input />
          <button>Search</button>
        </form>
      </div>
      <div>
      <h2>My favorites:</h2>
      </div>
      <div>
        <FoodList />
      </div>

      
    </div>
  );
}

export default connect(null, { fetchNutrients})(App);
