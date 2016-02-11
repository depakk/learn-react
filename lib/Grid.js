import Row from "./Row";
import Cell from "./Cell";


class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.prepareMatrix();
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


  }

  render() {
    return (
      <div>
      {
        this.matrix.map( (cells, i) =>
          <Row key={i}>
            {cells.map(cellId =>
              <Cell key={cellId}/>
            )}
          </Row>
        )
      }

      </div>
    );
  }
}

export default Grid;
