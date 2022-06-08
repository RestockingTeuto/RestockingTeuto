import React from 'react';
import Logo from './Logo'
import './App.css';
function App() {
    return (
        <div className="App" style={{overflowX: 'auto', fontSize: '14px'}}>

            <div className="Logo">
                {
                    Logo()
                }
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={"Content"} style={{fontSize: '24px', color: "darkgreen"}}>
                <h3>Who are we?</h3>
                <p style={{color: "greenyellow"}}>
                    Our project's goal is to restore trees that have been cut down or destroyed in other ways.
                    <br/>We chose the Teutoburger Forest, which is located in North Rhine-Westphalia, Germany, for this
                    project.
                </p>
                {
                    <div className={"breaks"}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                }
            </div>

        </div>
    );
}

export default App;
