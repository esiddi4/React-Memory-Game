import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Memory Game | Cactus Edition</a></li>
            <li>
            {props.message}</li>
            <li>Score: {props.score} <span className="font-white">| Top Score: {props.topScore}</span></li>
        </ul>
    </div>
);

export default Header;
