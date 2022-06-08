import React from "react";
import './Logo.css'
import Settings from "./Settings";
import LogoIcon from "./assets/Logo.png"

function Logo() {
    return (
        <div className="Settings">

            {
                Settings()
            }

            <div className="Logo">
                <header>
                    Restocking <br/>
                    Teuto
                </header>
                <img className={"Logo-Icon"} src={LogoIcon}
                        alt="HTML5" width="711.108" height="400"/>
            </div>


        </div>

    )
}

export default Logo