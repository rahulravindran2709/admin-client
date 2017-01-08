class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ value: event.target.value });
  }

  reversedText() {
    return this.state.value.split('').reverse().join('');
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.handleInput }/>
        <div>Reversed text: { this.reversedText() }</div>
      </div>
    );
  }
}
