import React from "react";
import "./Header.css";

const Header = props => (
    <nav class="navbar navbar-default navbar-fixed-top">
    <div className="container">
        <ul className="nav navbar-nav">
            <li><a href="/"><strong>Cactus Memory Game</strong></a></li>
            <li>{props.message}</li>
            <li>Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </div>
    </nav>
);

export default Header;
