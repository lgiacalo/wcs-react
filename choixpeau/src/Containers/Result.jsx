import { Component } from "react";
import { connect } from "react-redux";
import Message from "../Components/Message";

const updateChoiceAction = () => ({
  type: "UPDATE_CHOICE_WITH_MY_INDEX",
  indexSelected: Math.floor(Math.random() * 4),
});

class Result extends Component {
  handleClick = () => {
    this.props.dispatch(updateChoiceAction());
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <ul>
          {this.props.houses.map((house) => (
            <li key={house}>{house}</li>
          ))}
        </ul>
        <button onClick={this.handleClick} style={{ marginBottom: "30px" }}>
          Discover your house
        </button>
        {this.props.selectedHouse && (
          <Message message={this.props.selectedHouse} />
        )}
      </div>
    );
  }
}

export default connect((store) => store)(Result);
