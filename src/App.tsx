import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="App-wrapper">
            <header className="header">
                    <img src={'https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/64250/optimized_large_thumb_stage.jpg'} />
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>Contacts</div>
            </nav>
            <div className="content">
                Main Content
            </div>
        </div>
    );
}

export default App;
