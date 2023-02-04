import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <header>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqQe8JhxoXjy2_lve779pbB0AlaR-rm4bHA&usqp=CAU'} />
            </header>
            <nav>
                <div>Profile</div>
                <div>Messages</div>
                <div>Contacts</div>
            </nav>
            <div>
                Main Content
            </div>
        </div>
    );
}

export default App;
