import React from "react";
import "./Imprint.css"
import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import {Link} from "react-router-dom";

function Team() {
    return (
        <div style={{display: "flex"}}>
            <ProSidebar className={"Sidebar"} style={{flex: 6}}>
                <Menu iconShape="square">
                    <MenuItem>Donation
                        <Link to="/RestockingTeuto/donation"/></MenuItem>
                    <MenuItem>Imprint<Link to={"/RestockingTeuto/Imprint"}/>
                    </MenuItem>
                    <MenuItem>
                        Home
                        <Link to={"/RestockingTeuto"}/>
                    </MenuItem>
                </Menu>
            </ProSidebar>
            <div className={"Text"} style={{flex: 6, justifyContent: "center", textAlign: "center"}}>
                <h1>Team</h1>
                <p >
                    Niklas<br/>
                    Alisa<br/>
                    Luca<br/>
                    Dennis<br/>
                    (Stefan)<br/>
                </p>
            </div>
        </div>
    );
}

export default Team;