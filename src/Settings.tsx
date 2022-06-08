import React, {useState} from "react";
import './Settings.css'
import ButtonIcon from "./assets/SettingsButtonIcon.jpg"
import Index from "./assets/index.jpg"


function Settings() {


    const styles = {
        background: '#000',
        width: '2px',
        cursor: 'col-resize',
        margin: '0 5px',
        height: '100%',
    };

    const [clicked, setClicked] = useState(false);


    return (
            clicked ? <img className="SettingsButtonIcon" onClick={() => setClicked(!clicked)} src={ButtonIcon}
                          alt="HTML5" width="25" height="25"/>
            : <img className="SettingsButtonIcon" onClick={() => setClicked(!clicked)} src={Index} alt="HTML5"
                   width="25" height="25"/>
    );
}

export default Settings