import React, {useState} from 'react';
import Logo from './Logo'
import './App.css';

function App(clicked: boolean, setClicked: (p: boolean) => any) {

    return (
        <div className="App" style={{overflowX: 'auto', fontSize: '14px'}}>
            {
                !clicked ? (
                        <div className={"inner"} style={{overflowX: 'auto', fontSize: '14px'}}>
                            <div className="Logo">
                                {
                                    Logo(clicked, setClicked)
                                }
                            </div>
                            <div className={"Content1"} style={{fontSize: '24px', color: "darkgreen"}}>
                                <h3>Who are we?</h3>
                                <p style={{color: "black"}}>
                                    Our project's goal is to restore trees that have been cut down or destroyed in other
                                    ways.
                                    <br/>We chose the Teutoburger Forest, which is located in North Rhine-Westphalia,
                                    Germany,
                                    for this
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
                            <div className={"Content2"} style={{fontSize: '24px', color: "darkgreen"}}>
                                {
                                    <div className={"breaks"}>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                }
                                <h3>But why is it so vital to restore the forest?</h3>
                                <p style={{color: "black"}}>
                                    Forests are a proven and very low-cost technique of absorbing carbon from the
                                    atmosphere,
                                    thus it is a crucial step toward meeting international climate targets.
                                    <br/>It also helps to slow down climate change.
                                    <br/>Food security, better air and water quality, climate change resilience, job
                                    generation,
                                    and other are also minor outcomes of the restoration.
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
                                    </div>
                                }
                            </div>
                            <div className={"Content3"} style={{fontSize: '24px', color: "darkgreen"}}>
                                {
                                    <div className={"breaks"}>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                }
                                <h3>Our situation in Germany</h3>
                                <p style={{color: "black"}}>
                                    According to the German government, 114,000 hectares of forest will need to be planted
                                    and
                                    refilled, with bark beetles alone destroying 40,000 hectares.<br/>
                                    Big organizations like the Arbor Day Foundation have already established campaigns like
                                    Team
                                    Trees, where people all over the world plant trees for one euro. In Germany, however,
                                    this
                                    is not the case.<br/>
                                    As a result, we aim to inspire others in Germany to establish similar ventures.
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
                                    </div>
                                }
                            </div>
                        </div>)
                    :
                    (<div className={"inner2"} style={{overflowX: 'auto', fontSize: '14px'}}>
                        <div className="Logo">
                            {
                                Logo(clicked, setClicked)
                            }
                        </div>
                        <div className={"Content"}>
                            <div className={"Content1"} style={{fontSize: '24px', color: "darkgreen"}}>
                                <h3>Who are we?</h3>
                                <p style={{color: "greenyellow"}}>
                                    Our project's goal is to restore trees that have been cut down or destroyed in other
                                    ways.
                                    <br/>We chose the Teutoburger Forest, which is located in North Rhine-Westphalia,
                                    Germany,
                                    for this
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
                            <div className={"Content2"} style={{fontSize: '24px', color: "darkgreen"}}>
                                {
                                    <div className={"breaks"}>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                }
                                <h3>But why is it so vital to restore the forest?</h3>
                                <p>
                                    Forests are a proven and very low-cost technique of absorbing carbon from the
                                    atmosphere,
                                    thus it is a crucial step toward meeting international climate targets.
                                    <br/>It also helps to slow down climate change.
                                    <br/>Food security, better air and water quality, climate change resilience, job
                                    generation,
                                    and other are also minor outcomes of the restoration.
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
                                    </div>
                                }
                            </div>
                            <div className={"Content3"} style={{fontSize: '24px', color: "darkgreen"}}>
                                {
                                    <div className={"breaks"}>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                }
                                <h3>Our situation in Germany</h3>
                                <p>
                                    According to the German government, 114,000 hectares of forest will need to be planted
                                    and
                                    refilled, with bark beetles alone destroying 40,000 hectares.<br/>
                                    Big organizations like the Arbor Day Foundation have already established campaigns like
                                    Team
                                    Trees, where people all over the world plant trees for one euro. In Germany, however,
                                    this
                                    is not the case.<br/>
                                    As a result, we aim to inspire others in Germany to establish similar ventures.
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
                                    </div>
                                }
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
}

export default App;
