import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Technologies />
    </div>
  );
}

const Technologies = () => {

    return (
        <div>
            <ol>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Redux</li>
            </ol>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <a href={'#'}>Home</a>
            <a href={'#'}>Need Feed</a>
            <a href={'#'}>Messages</a>
        </div>
    )
}

export default App;
