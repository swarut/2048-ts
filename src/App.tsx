import * as React from 'react';
import Board from './components/Board';
import './css/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
