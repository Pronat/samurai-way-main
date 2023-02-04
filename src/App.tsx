import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="App-wrapper">
            <header className="header">
                <img
                    src={'https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/64250/optimized_large_thumb_stage.jpg'}/>
            </header>
            <nav className="nav">
                <div>
                    <a href={'111'}>Profile</a>
                </div>
                <div>
                    <a href={'111'}>Messages</a>
                </div>
                <div>
                    <a href={'111'}>News</a>
                </div>
                <div>
                    <a href={'111'}>Music</a>
                </div>
                <div>
                    <a href={'111'}>Settings</a>
                </div>
            </nav>
            <div className="content">
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
            </div>
        </div>
    );
}

export default App;
