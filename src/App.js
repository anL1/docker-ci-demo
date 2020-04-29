import React from 'react';

class App extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
  }

  click = () => {
    return() => {
        this.setState((prevState) => ({
          clicks: prevState.clicks + 1
        }))
    }
  }

  render() {
      return(
        <div>
          <p>
            Hello World! This is just a test app for DevOps with Docker -course!
          </p>
          <p>Amount of clicks: {this.state.clicks}</p>
          <Button handleClick={this.click()} text="click"/>
        </div>
      )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} >
      {text}
  </button>
)

export default App;
