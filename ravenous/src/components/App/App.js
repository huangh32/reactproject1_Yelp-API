import logo from './logo.svg';
import './App.css';
import React from 'react';
//import modules
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

//paste Business object
import { render } from 'react-dom';
import '../Business/Business.css';

 const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
 }


const a = [
  business,
  business,
  business,
  business,
  business,
  business
]; 

class App extends React.Component {
  render(){
  return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList a={a}/>
        </div>
  );
}
}

export default App;
