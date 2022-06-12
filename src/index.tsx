import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import CookieConsent from "react-cookie-consent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Donation from "./components/Donation";
import Imprint from "./components/Imprint"
import Team from "./components/Team"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>

        <BrowserRouter>
            <Routes>
                <Route path={"/"} caseSensitive={false} element={<App/>}/>
                <Route path={"/RestockingTeuto"} caseSensitive={false} element={<App/>}/>
                <Route path='/RestockingTeuto/donation' caseSensitive={false} element={<Donation/>}/>
                <Route path={"/RestockingTeuto/Imprint"} caseSensitive={false} element={<Imprint/>}/>
                <Route path={"/RestockingTeuto/Team"} caseSensitive={false} element={<Team/>}/>
            </Routes>
        </BrowserRouter>
        <CookieConsent
            location="bottom"
            buttonText="Yess!!"
            cookieName="Why do you care? Privacy? NO!"
            style={{background: "#2B373B"}}
            buttonStyle={{color: "#4e503b", fontSize: "13px"}}
            expires={0}
        >
            We want to steal all your data. Click 'Yess!!' to accept.
        </CookieConsent>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
