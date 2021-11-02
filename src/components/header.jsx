import React, { Component } from "react";

class Headers extends Component {
  state = {
    quotes: [
      "The anger of a person who is strong can always bide its time.",
      "A bad manner spoils everything even reason and justice a good one supplies everything gilds a No sweetens a truth and adds a touch of beauty to old age itself.",
      "Don't get me wrong - I've gone to a club. But I'd much rather be with my close friends at home or a concert or on a trip. I'll go dancing with my grandma. She likes to cut a rug!.",
      "I've got two brothers and two sisters, so there's five of us and we're all very close, which is cool.",
      "The only way to get rid of a temptation is to yield to it.",
      "The natural effect of sorrow over the dead is to refine and elevate the mind.",
      "I have such trust complexes. I'm close to, like, two people.",
      "How wrong it is for a woman to expect the man to build the world she wants, rather than to create it herself.",
      "Facts are the enemy of truth.",
    ],
    randomQuote: 0,
    imageSrc: "https://picsum.photos/1200",
    imageHash: Date.now(), // Otherwise image is not reloaded, due to cache
  };

  componentDidMount() {
    const randValue = Math.floor(Math.random() * this.state.quotes.length);

    // Re rendering the component every 10 seconds, for a new image and quote to load
    this.interval = setInterval(
      () => this.setState({ randomQuote: randValue, imageHash: Date.now() }),
      10000
    );
  }

  componentWillUnmount() {
    // Need to clear the setInterval after component is unmounted, otherwise might lead to memory leak
    clearInterval(this.interval);
  }
  render() {
    const { quotes, imageSrc, imageHash, randomQuote } = this.state;
    const quote = quotes[randomQuote];
    return (
      <div className="crop">
        <img
          key={Date.now()}
          src={`${imageSrc}?${imageHash}`}
          alt="Random images"
        />
        <p className="mid-pic">{quote}</p>
      </div>
    );
  }
}

export default Headers;
