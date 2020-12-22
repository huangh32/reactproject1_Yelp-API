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
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            <li key={sortByOptionValue}>{sortByOption}</li>

        }); 
    }

    render() {
        return (
                <div className="SearchBar">
                    <div className="SearchBar-sort-options">
                        <ul>
                        {this.renderSortByOptions}
                        </ul>
                    </div>
                    <div className="SearchBar-fields">
                        <input placeholder="Search Businesses" />
                        <input placeholder="Where?" />
                    </div>
                    <div className="SearchBar-submit">
                        <a>Let's Go</a>
                    </div>
                </div>
        )
    }

    
};

export default SearchBar;