//exporting modukes
//classes
//states
import React, {Component} from 'react';

// const SearchBar = () => {
//     return <input /> //JSX 
// };// functional component


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''}
        //state = object...
    }
    render(){
        //must return some JSX or...error
        return(
            <div>
             <input 
             value= {this.state.term}
             />
        </div>);
    }

}

export default SearchBar;