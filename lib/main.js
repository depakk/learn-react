import Container from "./Container";
import Timer from "./Timer";

// console.log("Hello");

ReactDOM.render(
  <div>
    <Timer initialSeconds={42} />
    <Timer initialSeconds={99} />
  </div>,
document.getElementById("react")
);

