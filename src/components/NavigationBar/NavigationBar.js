import React from "react";
//  you need to import your css file in order to get the stylesheets
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes"
import { useAuth } from "../../context/AuthContext";

// ECMA6 function formatting
const NavigationBar = () => {
    const auth = useAuth();
    return (
        // this is how you link classes
        <header className="NavigationBar">
            <nav>
                <ul>
                    <Link to={ROUTES.HOME}>
                        <li>Home</li>
                    </Link>
                    {auth.user ?
                        (<>
                            <Link to={ROUTES.WEBAPP}>
                                <li>Open Webapp</li>
                            </Link>
                            <li onClick={() => auth.signout()}>Sign Out</li>
                        </>) :
                        //below you will see an instance of a FRAGMENT ...
                        //... this is used to group HTML code inside JS ...
                        //... adding parens also encouraged in conditional formatting apparently.
                        (<>
                            <Link to={ROUTES.SIGN_UP}>
                                <li>Sign Up</li>
                            </Link>
                            <Link to={ROUTES.LOGIN}>
                                <li>Login</li>
                            </Link>
                        </>)}

                </ul>
            </nav>
        </header>
    )
};

export default NavigationBar; //used for every "main" func? why is it required?