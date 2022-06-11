import React from "react";
import Logo from './assets/Logo2.png'
import './App.css'

function App() {
    return (
        <div className={"TT"}>
            <div>
                <img className={"Logo"} alt={"HTML5"} src={Logo}/>
            </div>
            <div className={"Content"}>
                <div className={"Content1"} style={{fontSize: '24px', color: "darkgreen"}}>
                    <h3>Who are we?</h3>
                    <p style={{color: "white"}}>
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
                    <p style={{color: "white"}}>
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
                    <p style={{color: "white"}}>
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
                <div className={"Content4"} style={{fontSize: '24px', color: "darkgreen"}}>
                    {
                        <div className={"breaks"}>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    }
                    <h3>How do we achieve this objective?</h3>
                    <p style={{color: "white"}}>
                        Planting trees is, of course, the most important aspect of "Restocking Teuto," but there are other factors to consider as well, such as improving soils and protecting wildlife corridors.
                        <br/>However, YOU must also assist us. <br/> If you want to protect forests, you can do things like buy forest-friendly products, use less paper, or use a toilet paper alternative like Bamboo.
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
        </div>
    );
}

export default App;