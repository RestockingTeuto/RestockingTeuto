import React, {useState} from "react";
import './App.css'
import Settings from "./assets/Settings.png"
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Donation from "./components/Donation"


function App() {

    const [clicked, setClicked] = useState(false);

    return (
        <div className={"App"}>
            <div className={"Logo"}>
                {
                    clicked ?
                        <ProSidebar className={"Sidebar"}>
                            <Menu iconShape="square">
                                <MenuItem>
                                    Donation
                                    <Link to="/RestockingTeuto/donation"/>
                                </MenuItem>
                                <MenuItem>Imprint
                                <Link to={"/RestockingTeuto/Imprint"}/></MenuItem>
                                <MenuItem>Team <Link to={"/RestockingTeuto/Team"}/></MenuItem>
                                <MenuItem onClick={() => setClicked(!clicked)}>Close</MenuItem>
                            </Menu>
                        </ProSidebar>
                        :
                        <img className={"SettingsButton"} src={Settings} alt={"HTML5"}
                             onClick={() => setClicked(!clicked)}/>
                }
            </div>

            <div className={"Content"}>
                <div className={"Content1"} style={{fontSize: '24px', color: "darkgreen"}}>
                    {
                        <div className={"breaks"}>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    }
                    <h3>Who are we?</h3> <br/>
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
                    <h3>But why is it so vital to restore the forest?</h3> <br/>
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
                    <h3>Our situation in Germany</h3> <br/>
                    <p style={{color: "white"}}>
                        According to the German government, 114,000 hectares of forest will need to be planted
                        and
                        refilled, with bark beetles alone destroying 40,000 hectares.<br/>
                        Big organizations like the
                        <a href="https://www.arborday.org/"> Arbor Day Foundation </a>
                        have already established campaigns like
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
                    <h3>How do we achieve this objective?</h3> <br/>
                    <p style={{color: "white"}}>
                        Planting trees is, of course, the most important aspect of "Restocking Teuto," but there are
                        other factors to consider as well, such as improving soils and protecting wildlife
                        corridors.
                        <br/>However, YOU must also assist us. <br/> If you want to protect forests, you can do
                        things
                        like buy forest-friendly products, use less paper, or use a toilet paper alternative like
                        Bamboo.
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