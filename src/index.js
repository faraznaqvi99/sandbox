import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// function MediaCard(props) {
//   return (
//     <Fragment>
//       <h2>{props.title}</h2>
//       <p>{props.body}</p>
//       <img src={props.imageUrl} alt="hello jee"/>
//     </Fragment>

//   );
// }
class Gate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isOpen = this.props.isOpen;

    return (
      <div>
        <p>{isOpen === true ? "Open!" : "closed!"}</p>
      </div>
    );
  }
}

ReactDOM.render(
  // <MediaCard
  //   title={5+5+"hello"}
  //   body={<strong>i am body</strong>}
  //   imageUrl="yep"
  // />,
  <Gate isOpen={false} />,
  document.querySelector("#root")
);
