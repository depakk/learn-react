import Row from "./Row";
import Cell from "./Cell";
import _ from "lodash";


class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.prepareMatrix();
     this.state = {
      correctGuess: 0,
      wrongGuess:0
     };
  }

  prepareMatrix() {
    // this.props.rows
    // this.props.columns

    this.matrix = [];

    for(let r = 0; r < this.props.rows; r++) {
      let row = [];
      for(let c = 0; c < this.props.columns; c++) {
        row.push(`${r}${c}`);
      }
      this.matrix.push(row);
    }

    console.log(this.matrix);
    // [
    //   0 [00, 01, 02, 03, 04],
    //   1 [10, 11, 12, 13, 14]
    // ]

    let flatMatrix = _.flatten(this.matrix);

    this.randomCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);

  }

  recordGuess(cellId) {
    if (this.props.gameState === "recall") {
      //console.log(cellId);
      //Check if state goes to wrong or correct guesses
      //
      this.props.recordGuessResult(this.cellIsActive(cellId), cellId);
    }
  }

  guessState(cellId) {
    if (this.props.correctGuesses.indexOf(cellId) >= 0) {
      return 'green';
    }
    if (this.props.wrongGuesses.indexOf(cellId) >= 0) {
      return 'red';
    }
  }

  cellIsActive(cellId) {
      return this.randomCells.indexOf(cellId) >= 0;
  }

  render() {
    // console.log('randomCells are', this.randomCells);
    // console.log('this.props is', this.props);
    // console.log(this.recordGuess);

    return (
      <div>
      {
        this.matrix.map( (cells, i) =>
          <Row key={i}>
            {cells.map(cellId =>
              <Cell key={cellId} id={cellId}
                guessState={this.guessState(cellId)}
                shouldShow={this.props.gameState === "memorize" && this.cellIsActive(cellId)}
                recordGuess={this.recordGuess.bind(this)}
                gameState={this.props.gameState} />
            )}
          </Row>
        )
      }
      </div>
    );
  }
}

export default Grid;
