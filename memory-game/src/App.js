import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import {Container, Row} from "./components/Grid";
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
    cards: cacti,
    notClicked: cacti
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  onCardClick = id => {

    const clicked = this.state.notClicked.find(cactus => cactus.id === id);

    if (!clicked) {

      this.setState({
        message: "You *suck-ulent* at this.",
        score: 0,
        topScore: ((this.state.score > this.state.topScore) ? this.state.score : this.state.topScore),
        notClicked: cacti
      });
      
    } else {

      const notClickedArray = this.state.notClicked.filter(cactus => cactus.id !== id);

      this.setState({
        message: "You're *sharper* than I thought!",
        score: this.state.score + 1,
        topScore: ((this.state.score < this.state.topScore) ? this.state.topScore : (this.state.score + 1)),
        notClicked: notClickedArray
      });

    }

    this.shuffleArray(cacti);
  }

  render() {
    return (
      <Wrapper>
        <Header
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore} />
        <Title />
        <Container>
          <Row message={this.state.message}>
        {
          this.state.cards.map(cactus => (
                <Card
                  id={cactus.id}
                  key={cactus.name}
                  image={cactus.image}
                  onCardClick={this.onCardClick}
                />
        ))}
          </Row>
        </Container>
        <Footer />
      </Wrapper>
    )
  }
};

export default App;
