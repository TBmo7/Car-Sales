import React, {useState} from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature} from "./Actions/AddtionalFeature"
import {subtractFeature} from "./Actions/AddedFeature"

import {connect} from "react-redux"



const App = props => {
  
  console.log("APP PROPS",props)
  
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  const removeFeature = item => {
    // dispatch an action here to remove an item
    // dispatch({type: REMOVE_FEATURE, item})
    subtractFeature(item)
    
    
  };

  const buyItem = (item) => {
    // dipsatch an action here to add an item
    // dispatch({type: ADD_FEATURE, item
   props.addFeature(item)
   
   
    
  };


  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures}
        addFeature = {buyItem}
        subtractFeature = {removeFeature} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapPropsToState = state =>{
  console.log("propstostate state", state)
  return {
    // addFeatureOnProps: state.buyItem.add,
    // removeFeatureOnProps: state.removeFeature.remove
    addingFeatureOnProps: state.additionalFeatureReducer.car.features,
    initStateForApp: state.additionalFeatureReducer

  }

}

// const mapDispatchToProps = dispatch =>{
//   return{
//     buyItem: item => dispatch(buyItem(item)),
//     removeFeature: item => dispatch(removeFeature(item))
//   }
// }

export default connect(
  mapPropsToState,
  {addFeature,subtractFeature}
  )(App)
