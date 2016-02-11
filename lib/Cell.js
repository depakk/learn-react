const Cell = (props) => {

  let active = props.gameState === "memorize" && props.randomCells.indexOf(props.id) >= 0;

  return (
    <div onClick={() => props.recordGuess(props.id)}
      className={`cell active-${active} red`}>
    </div>
  );
};

export default Cell;
