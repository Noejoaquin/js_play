'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick(){
    let newCount = this.state.count += 1
    this.setState({count: newCount})
  }

  render() {
    return (
      <div>
      <span>{this.state.count}</span>
      <button onClick={() => this.handleClick() }>
        count
      </button>
      </div>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);
