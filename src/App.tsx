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
                <div>
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                </div>
                <div>
                     <img style={{width: '130px'}} src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" />
                </div>
                <div>
                    My Posts
                    <div>
                        New post
                    </div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                </div>
            </div>
        </div>
    );
}

export default App;
