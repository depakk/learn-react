import Grid from "./Grid";
import Footer from "./Footer";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: "ready"
    };
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        gameState: "memorize"
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        <Grid {...this.props} />
        <Footer {...this.props} gameState={this.state.gameState}/>
      </div>
    );
  }
}

Game.defaultProps = {
  hints: {
    "ready": "Get Ready...",
    "memorize" : "Memorize!",
    "recall" : "GO!"
  }
};

export default Game;
