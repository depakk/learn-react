import Timer from "./Timer";

class Container extends React.Component {
  constructor(props) {
    super(props);

    //represent private state for Timer
    this.state = {
      timers: [50, 100],
      inputValue: 'RandomNum'
    };
  }

  addTimer() {
    let timers = this.state.timers;
    timers.push(this.state.inputValue);
    this.setState({ timers, inputValue: '' });
  }

  updateInput(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue}
          onChange={this.updateInput.bind(this)}
        />
        <button onClick={this.addTimer.bind(this)}>
          Add
        </button>
        {
          this.state.timers.map(timer =>
            <Timer initialSeconds={timer} />
          )
        }
      </div>
    );
  }
}

export default Container;
