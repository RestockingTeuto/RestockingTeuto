import React, {useState} from "react";
import './Settings.css'
import ButtonIcon from "./assets/Settings.png"
import Index from "./assets/index.jpg"

function Settings(state: boolean, setClicked: (p: boolean) => any) {

    return (
            !state ? <img className="SettingsButtonIcon" onClick={() => setClicked(!state)} src={ButtonIcon}
                          alt="HTML5" width="60" height="40"/>
            : <img className="SettingsButtonIcon" onClick={() => setClicked(!state)} src={Index} alt="HTML5"
                   width="40" height="40"/>
    );
}

export default Settings