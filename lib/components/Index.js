import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class App extends React.Component {
  state = {
    answer: 42,
  };
  asyncFunc = () => {
    return Promise.resolve(37);
  };
  async componentDidMount() {
      this.setState({
        answer: await this.asyncFunc()
      });
  }
  render() {
    return (
      <h1>test string, the answer is {this.state.answer}</h1>
    );
  }
};

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
