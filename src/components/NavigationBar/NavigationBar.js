import React from "react";
//  you need to import your css file in order to get the stylesheets
import "./NavigationBar.css";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes"

// ECMA6 function formatting
const NavigationBar = () => {
    return (
        // this is how you link classes
        <header className="NavigationBar">
            <nav>
                <ul>
                    <Link to={ROUTES.HOME}>
                        <li>Home</li>
                    </Link>
                    <Link to={ROUTES.SIGN_UP}>
                        <li>Sign Up</li>
                    </Link>

                </ul>
            </nav>
        </header>
    )
};

export default NavigationBar; //used for every "main" func? why is it required?