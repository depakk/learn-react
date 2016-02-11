class Timer extends React.Component {

  constructor(props) {
    super(props);

    //represent private state for Timer
    this.state = {
      remainingSeconds: this.props.initialSeconds
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    setInterval(() =>
      this.setState({
        remainingSeconds: this.state.remainingSeconds - 1
      }),
      1000);
  }

  render() {
    return (
      <div>{this.state.remainingSeconds}</div>
    );
  }
}

export default Timer;
