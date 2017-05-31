import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBuIc7EL4yoxtPWdTQaZTolKYk4R4CEscY';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term:'surfboards'}, (videos)=>{
            this.setState({videos});
        });
    }
    
    render(){
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}



ReactDOM.render(<App/>, document.querySelector('.container'));