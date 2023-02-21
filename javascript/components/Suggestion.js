export default function Suggestion({ target, initialState }) {
  this.state = initialState;
  console.log(this.state, "<state");
  this.setState = (nextState) => {
    this.state = nextState;
    console.log(this.state);
  };
}
