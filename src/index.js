import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBuIc7EL4yoxtPWdTQaZTolKYk4R4CEscY';

// create a new component. This component should produce 
// some html

const App = () => {
    return <div > Hello World! < /div>;
}

// take this component's generated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));