import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Card";
import cacti from "./cacti.json"
import Footer from "./components/Footer";

class App extends Component {

  state = {
    message: "",
    score: 0,
    topScore: 0,
    cards: cacti
  }

  render() {
    return (
      <Wrapper>
        <Header
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore} />
        <Title />
        {
          this.state.cards.map(cactus => (
                <Card
                  id={cactus.id}
                  key={cactus.name}
                  image={cactus.image}
                  detectionAlert={this.detectionAlert}
                />
        ))}
        <Footer />
      </Wrapper>
    )
  }
};

export default App;
