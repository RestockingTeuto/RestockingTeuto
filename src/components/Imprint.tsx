import React from "react";
import "./Imprint.css"
import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import {Link} from "react-router-dom";

function Imprint() {
    return (
        <div style={{display: "flex"}}>
            <ProSidebar className={"Sidebar"} style={{flex: 6}}>
                <Menu iconShape="square">
                    <MenuItem>Donation
                        <Link to="/RestockingTeuto/donation"/></MenuItem>
                    <MenuItem>Team <Link to={"/RestockingTeuto/Team"}/></MenuItem>
                    <MenuItem>
                        Home
                        <Link to={"/RestockingTeuto"}/>
                    </MenuItem>
                </Menu>
            </ProSidebar>
            <div className={"Text"} style={{flex: 6, justifyContent: "center", textAlign: "center"}}>
                <h1>Imprint</h1>
                <p >
                    This is not a legal institute.<br/> This is only a school project. <br/>If you have any complains
                    pls write a mail at huck@gymnasiumheepen.de.
                </p>
            </div>
        </div>
    );
}

export default Imprint;