export default function Suggestion({ target, initialState }) {
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    console.log(this.state);
  };
}
