import React from "react";
import './Donation.css'
import {Link} from "react-router-dom";
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';

const Donation = () => {
    return (
        <div style={{display: "flex"}}>
            <ProSidebar className={"Sidebar"} style={{flex: 6}}>
                <Menu iconShape="square">
                    <MenuItem>Imprint<Link to={"/RestockingTeuto/Imprint"}/>
                    </MenuItem>
                    <MenuItem>Team <Link to={"/RestockingTeuto/Team"}/></MenuItem>
                    <MenuItem>
                        Home
                        <Link to={"/RestockingTeuto"}/>
                    </MenuItem>
                </Menu>
            </ProSidebar>
            <div className={"Text"} style={{flex: 6, justifyContent: "center", textAlign: "center"}}>
                <h1>Donations</h1>
                <p>
                    We do not support donation at this Point.
                </p>
            </div>
        </div>
    )
};

export default Donation;