// import React from 'react';
// import ReactDOM from 'react-dom';
// // import Game from './components/game/game'
// import './index.css';

// class Square extends React.Component {
//     /*adding states for memory. 'super' is always used to define the constructor of a subclass */
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     render() {
//       return (
//         <button 
//         className="square" 
//         onClick={this.props.onClick}
//         > 
//           {this.props.value}
//         </button>
//       );
//     }
//   }
//   /* passing this.prop.value from a parent board component to a child square component */
//   /* onclick method tells react to re-render the square */
//   class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//             xIsNext: true,
//         };
//     }

//     handleClick(i) {
//         const squares = this.state.squares.slice();
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             squares: squares,
//             xIsNext: !this.state.xIsNext,
//         });
//     }
//     renderSquare(i) {
//       return (
//         <Square 
//             value={this.state.squares[i]}
//             onClick={() => this.handleClick(i)} 
//         />
//     );
//     }

//   // child component inside the baord component
//     render() {
//       const winner = calculateWinner(this.state.squares);
//       let status;
//       if (winner) {
//           status = 'Winner: ' + winner;
//       } else {
//         const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//       }
  
//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  
//   function calculateWinner(squares) {
//       const lines = [
//           [0, 1, 2],
//           [3, 4, 5],
//           [6, 7, 8],
//           [0, 3, 6],
//           [1, 4, 7],
//           [2, 5, 8],
//           [0, 4, 8],
//           [2, 4, 6],
//       ];

//       for(let i = 0; i <lines.length; i++) {
//           const [a,b,c] = lines[i];
//           if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//               return squares[a];
//           }
//         }
//         return null;
//     }
 
//     // history = [
//     //     // Before first move
//     //     {
//     //       squares: [
//     //         null, null, null,
//     //         null, null, null,
//     //         null, null, null,
//     //       ]
//     //     },
//     //     // After first move
//     //     {
//     //       squares: [
//     //         null, null, null,
//     //         null, 'X', null,
//     //         null, null, null,
//     //       ]
//     //     },
//     //     // After second move
//     //     {
//     //       squares: [
//     //         null, null, null,
//     //         null, 'X', null,
//     //         null, null, 'O',
//     //       ]
//     //     },
//     //     // ...
//     //   ]

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Components/Game/game'
import './index.css';

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));