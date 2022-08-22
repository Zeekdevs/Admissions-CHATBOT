import React from "react";
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <nav>
            <div className="nav-wrapper">
                <ul>
                    <li>
                       <Link to={'/contact'} className="brand-logo" >Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>

    )
};

export default Header;