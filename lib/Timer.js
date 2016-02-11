class Timer extends React.Component {

  constructor(props) {
    super(props);

    //represent private state for Timer
    this.state = {
      remainingSeconds: this.props.initialSeconds
    };
  }

  stopTimer() {
    clearInterval(this.timerId);
  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerId = setInterval(() =>
      this.setState({
        remainingSeconds: this.state.remainingSeconds - 1
      }),
      1000);
  }

  handleClick(se) {
    this.stopTimer();
  }

  render() {
    return (
      <div onClick={this.stopTimer.bind(this)}>
        {this.state.remainingSeconds}
      </div>
    );
  }
}

export default Timer;
