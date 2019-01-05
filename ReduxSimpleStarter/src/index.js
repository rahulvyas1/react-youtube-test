import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBLt4fKutjHL0kMwNWyOzNmz9DDxRtroxQ';

//test search pkg
YTSearch({key: API_KEY, term:'pewdiepie'}, data => console.log(data));
//create a new component and this component
// should produce some html

class App extends Component{
    constructor(props)
    {
        super(props);

        this.state = { videos: []};
    }
    render(){
       return(
        <div>
        <SearchBar/>
    </div>
       ); 
    }
}

//take this component's generated html and put
// it on the page
ReactDOM.render(<App/>, document.querySelector('.container')); 
