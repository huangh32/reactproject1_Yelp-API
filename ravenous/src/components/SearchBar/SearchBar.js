import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best match',
    'Highest Rated': 'highest rated',
    'Most Reviewed': 'most reviewed'
}
//term will refer to the search term located in the search input, location will refer to the location to search near from the location input, and sortBy will represent the selected sorting option to use.
class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term:'',
            location:'',
            sortBy:'best_match'
            
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        /*this.sortByOptions = {
            'Best Match': 'best match',
            'Highest Rated': 'highest rated',
            'Most Reviewed': 'most reviewed' 
        };*/

    };

    //This method will prove useful in providing visual feedback to users of Ravenous.
    getSortByClass(sortByOption) {
        if(this.sortBy===sortByOption){
            return 'active';
        }
        else{
            return '';
        }
    }

    //This method will be useful when communicating with the Yelp API in the future.
    handleSortByChange(sortByOption) {
        this.setState({sortBy : sortByOption});
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    handleLocationChange(event){
        this.setState({location: event.target.value});
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
        event.preventDefault();
    }
    //  The method should iterate through the keys and values of the sortByOptions object and return a list item.
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            <li className = {this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this,sortByOptionValue)} >{sortByOption}</li>

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
                        <input placeholder="Search Businesses" onChange = {this.handleTermChange}/>
                        <input placeholder="Where?" onChange = {this.handleLocationChange} />
                    </div>
                    <div className="SearchBar-submit">
                        <a onClick={this.handleSearch}>Let's Go</a>
                    </div>
                </div>
        )
    }

    
};

export default SearchBar;