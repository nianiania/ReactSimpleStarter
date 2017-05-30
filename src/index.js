import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. This component should produce 
// some html

const App = function() {
    return <div > Hi! < /div>;
}

// take this component's generated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(App);