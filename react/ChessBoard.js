
import React from "react";
import {render} from 'react-dom'
import Chessground from 'react-chessground'
import 'react-chessground/dist/styles/chessground.css'
import Chess from 'chess.js'

let moveList = [
    { from: "d2", to: "d4" },
    { from: "g8", to: "f6" },
    { from: "c2", to: "c4" },
    { from: "e7", to: "e6" },
    { from: "g1", to: "f3" },
    { from: "d7", to: "d5" },
    { from: "b1", to: "c3" },
    { from: "c7", to: "c6" },
    { from: "e2", to: "e3" },
    { from: "b8", to: "d7" },
    { from: "d1", to: "c2" },
    { from: "f8", to: "d6" },
    { from: "f1", to: "d3" },
    { from: "e8", to: "g8" },
    { from: "e1", to: "g1" },
    { from: "d5", to: "c4" },
    { from: "d3", to: "c4" },
    { from: "b7", to: "b5" },
    { from: "c4", to: "e2" },
    { from: "c8", to: "b7" },
    { from: "e3", to: "e4" },
    { from: "e6", to: "e5" },
    { from: "c1", to: "e3" },
    { from: "e5", to: "d4" },
    { from: "f3", to: "d4" },
    { from: "d8", to: "b8" },
    { from: "d4", to: "f5" },
    { from: "d6", to: "h2" },
    { from: "g1", to: "h1" },
    { from: "h2", to: "f4" },
    { from: "e3", to: "f4" },
    { from: "b8", to: "f4" },
    { from: "g2", to: "g3" },
    { from: "f4", to: "e5" },
    { from: "f2", to: "f4" },
    { from: "e5", to: "e6" },
    { from: "a1", to: "d1" },
    { from: "b5", to: "b4" },
    { from: "d1", to: "d6" },
    { from: "e6", to: "e8" },
    { from: "e2", to: "f3" },
    { from: "b4", to: "c3" },
    { from: "c2", to: "c3" },
    { from: "g8", to: "h8" },
    { from: "g3", to: "g4" },
    { from: "f8", to: "g8" },
    { from: "f1", to: "e1" },
    { from: "c6", to: "c5" },
    { from: "h1", to: "g1" },
    { from: "f6", to: "e4" },
    { from: "f3", to: "e4" },
    { from: "b7", to: "e4" },
    { from: "g8", to: "h8" },
    { from: "d6", to: "h6" },
    { from: "e4", to: "f5" },
    { from: "e1", to: "e8" },
    { from: "a8", to: "e8" },
    { from: "g4", to: "f5" },
    { from: "d7", to: "f6" },
    { from: "h6", to: "h2" },
    { from: "h7", to: "h6" },
    { from: "h2", to: "g2" },
    { from: "e8", to: "e4" },
    { from: "c3", to: "c5" },
    { from: "g8", to: "d8" },
    { from: "c5", to: "a7" },
    { from: "h8", to: "g8" },
    { from: "a2", to: "a4" },
    { from: "e4", to: "f4" },
    { from: "a4", to: "a5" },
    { from: "f4", to: "f5" },
    { from: "a5", to: "a6" },
    { from: "d8", to: "d1" },
    { from: "g1", to: "h2" },
    { from: "f5", to: "h5" },
    { from: "h2", to: "g3" },
    { from: "d1", to: "f1" },
    { from: "a7", to: "b7" },
    { from: "h5", to: "g5" },
    { from: "g3", to: "h2" },
    { from: "g5", to: "h5" },
    { from: "h2", to: "g3" },
    { from: "h5", to: "g5" },
    { from: "g3", to: "h2" },
    { from: "g5", to: "h5" },
    { from: "h2", to: "g3" },
    { from: "h5", to: "g5" },
    { from: "g3", to: "h2" },
    { from: "g5", to: "h5" },
    { from: "h2", to: "g3" },
    { from: "h5", to: "g5" },
    { from: "g3", to: "h2" },
    { from: "g5", to: "h5" },
    { from: "h2", to: "g3" },
]

class ChessBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chess: new Chess(),
            moveIdx: 0
        }
    }
    makeMoveOrReset(){
      let chess = this.state.chess
      let moveIdx = this.state.moveIdx
      if( moveIdx == moveList.length ){
          this.setState({
              chess: new Chess(),
              moveIdx: 0,
              lastMove: null
          })
          return
      }
      let move = moveList[ moveIdx ]
      chess.move( moveList[ moveIdx ] )
      this.setState({
          chess: chess,
          moveIdx: moveIdx + 1,
          lastMove: [ move.from, move.to ]
      })
    }
    tick(){
        this.makeMoveOrReset()
        setTimeout( this.tick.bind(this), 1000 )
    }
    componentDidMount(){
        this.tick()
    }
    getFen(){
        let fen = this.state.chess.fen()
        return fen
    }
    render(){
        let fen = this.getFen()
        let lastMove = this.state.lastMove
        console.log( this.state.moveIdx )
        return <Chessground
            fen={fen}
            lastMove={lastMove}
        />
    }
}

export {ChessBoard}
