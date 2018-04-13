import React from "react";
import "./Title.css";

const Title = props => (
  <div className="jumbotron text-center">
    <div className="container">
    <h1>Cactus Memory Game</h1>
    <br/>
    <p>Click on a cactus to earn points, but don't click on any more than once</p>
    <p>or you will lose and the game will restart!</p>
    </div>
  </div>
)

export default Title;
