import logo from './logo.svg';
import './App.css';
import React from 'react';
//import modules
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

//paste Business object
import { render } from 'react-dom';
import '../Business/Business.css';

/*
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
]; */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term,location,sortBy){
    Yelp.search(term, location,sortBy).then(
      (a) => {this.setState({businesses: a});}
    );
  }
  render(){
  return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={this.state.businesses}/>
        </div>
  );
}
}

export default App;
