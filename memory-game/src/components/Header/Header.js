import React from "react";
import "./Header.css";

const Header = props => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <ul className="nav nav-pills nav-justified text-center">
                <li><a href="/"><strong>Cactus Memory Game</strong></a></li>
                <li className={props.message.indexOf("!") !== -1 ? "success" : "fail"}>
                    {props.message}
                </li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </div>
    </nav>
);

export default Header;
