import Timer from "./Timer";
import Grid from "./Grid";
import Footer from "./Footer";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Grid rows={5} columns={5}/>
        <Footer />
      </div>
    );
  }
}

export default Container;
