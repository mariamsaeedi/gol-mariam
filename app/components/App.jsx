import React from 'react';
import Board from '../board';

class BoardViewer extends React.Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.board)}</div>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board([[false, false, false],
                        [false, false, false],
                        [false, false, false]])
    }
  }

  render() {
    return (
      <div>
        <BoardViewer board={this.state.board} />
      </div>
    );
  }
}
