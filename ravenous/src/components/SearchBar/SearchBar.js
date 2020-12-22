import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best match',
    'Highest Rated': 'highest rated',
    'Most Reviewed': 'most reviewed'
}

class SearchBar extends React.Component {
    //  The method should iterate through the keys and values of the sortByOptions object and return a list item.
    renderSortByOptions() {
        return Object.keys(sortByOptions).map();
    }

    
}