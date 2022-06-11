import React from "react";
import './Logo.css'
import Settings from "./Settings";

function Logo(state: boolean, setClicked: (p: boolean) => any) {

    return (
        <div className="Settings">
            {
                state ?
                    <div></div>
                    :
                    <div className={"notClicked"}>

                        <div className={"nColumn2"}>
                            {
                                Settings(state, setClicked)
                            }
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
                                    <br/>
                                </div>
                            }
                        </div>

                    </div>
            }
        </div>

    )
}

export default Logo