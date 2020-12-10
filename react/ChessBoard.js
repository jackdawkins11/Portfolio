
import React from "react";
import Chessground from 'react-chessground'
import 'react-chessground/dist/styles/chessground.css'
import Chess from 'chess.js'

let moveList = [
    {
        "from": "d2",
        "to": "d4"
    },
    {
        "from": "d7",
        "to": "d5"
    },
    {
        "from": "c2",
        "to": "c4"
    },
    {
        "from": "e7",
        "to": "e6"
    },
    {
        "from": "b1",
        "to": "c3"
    },
    {
        "from": "f8",
        "to": "b4"
    },
    {
        "from": "e2",
        "to": "e3"
    },
    {
        "from": "g8",
        "to": "f6"
    },
    {
        "from": "g1",
        "to": "f3"
    },
    {
        "from": "e8",
        "to": "g8"
    },
    {
        "from": "f1",
        "to": "d3"
    },
    {
        "from": "c7",
        "to": "c5"
    },
    {
        "from": "e1",
        "to": "g1"
    },
    {
        "from": "b8",
        "to": "c6"
    },
    {
        "from": "d4",
        "to": "c5"
    },
    {
        "from": "d5",
        "to": "c4"
    },
    {
        "from": "d3",
        "to": "c4"
    },
    {
        "from": "b4",
        "to": "c5"
    },
    {
        "from": "d1",
        "to": "c2"
    },
    {
        "from": "b7",
        "to": "b6"
    },
    {
        "from": "b2",
        "to": "b3"
    },
    {
        "from": "c8",
        "to": "b7"
    },
    {
        "from": "c1",
        "to": "b2"
    },
    {
        "from": "c6",
        "to": "b4"
    },
    {
        "from": "c2",
        "to": "e2"
    },
    {
        "from": "a8",
        "to": "c8"
    },
    {
        "from": "f1",
        "to": "d1"
    },
    {
        "from": "d8",
        "to": "e7"
    },
    {
        "from": "a2",
        "to": "a3"
    },
    {
        "from": "b4",
        "to": "d5"
    },
    {
        "from": "c3",
        "to": "d5"
    },
    {
        "from": "f6",
        "to": "d5"
    },
    {
        "from": "b3",
        "to": "b4"
    },
    {
        "from": "c5",
        "to": "d6"
    },
    {
        "from": "a1",
        "to": "c1"
    },
    {
        "from": "h7",
        "to": "h6"
    },
    {
        "from": "c4",
        "to": "a6"
    },
    {
        "from": "c8",
        "to": "c1"
    },
    {
        "from": "d1",
        "to": "c1"
    },
    {
        "from": "e7",
        "to": "d7"
    },
    {
        "from": "a6",
        "to": "b5"
    },
    {
        "from": "d7",
        "to": "e7"
    },
    {
        "from": "e3",
        "to": "e4"
    },
    {
        "from": "d5",
        "to": "f4"
    },
    {
        "from": "e2",
        "to": "e3"
    },
    {
        "from": "f4",
        "to": "g6"
    },
    {
        "from": "g2",
        "to": "g3"
    },
    {
        "from": "f8",
        "to": "d8"
    },
    {
        "from": "g1",
        "to": "g2"
    },
    {
        "from": "e6",
        "to": "e5"
    },
    {
        "from": "b5",
        "to": "c6"
    },
    {
        "from": "b7",
        "to": "c6"
    },
    {
        "from": "c1",
        "to": "c6"
    },
    {
        "from": "e7",
        "to": "b7"
    },
    {
        "from": "c6",
        "to": "c2"
    },
    {
        "from": "a7",
        "to": "a5"
    },
    {
        "from": "b4",
        "to": "a5"
    },
    {
        "from": "b6",
        "to": "a5"
    },
    {
        "from": "h2",
        "to": "h4"
    },
    {
        "from": "f7",
        "to": "f6"
    },
    {
        "from": "b2",
        "to": "c1"
    },
    {
        "from": "g6",
        "to": "h8"
    },
    {
        "from": "h4",
        "to": "h5"
    },
    {
        "from": "h8",
        "to": "f7"
    },
    {
        "from": "e3",
        "to": "d3"
    },
    {
        "from": "f6",
        "to": "f5"
    },
    {
        "from": "c2",
        "to": "c4"
    },
    {
        "from": "f5",
        "to": "f4"
    },
    {
        "from": "g3",
        "to": "f4"
    },
    {
        "from": "e5",
        "to": "f4"
    },
    {
        "from": "d3",
        "to": "d5"
    },
    {
        "from": "b7",
        "to": "d5"
    },
    {
        "from": "e4",
        "to": "d5"
    },
    {
        "from": "d6",
        "to": "e7"
    },
    {
        "from": "c4",
        "to": "d4"
    },
    {
        "from": "g8",
        "to": "h7"
    },
    {
        "from": "a3",
        "to": "a4"
    },
    {
        "from": "e7",
        "to": "f6"
    },
    {
        "from": "d4",
        "to": "d1"
    },
    {
        "from": "d8",
        "to": "c8"
    },
    {
        "from": "c1",
        "to": "f4"
    },
    {
        "from": "c8",
        "to": "c4"
    },
    {
        "from": "f4",
        "to": "g3"
    },
    {
        "from": "c4",
        "to": "a4"
    },
    {
        "from": "d5",
        "to": "d6"
    },
    {
        "from": "a4",
        "to": "e4"
    },
    {
        "from": "d1",
        "to": "c1"
    },
    {
        "from": "g7",
        "to": "g6"
    },
    {
        "from": "c1",
        "to": "c7"
    },
    {
        "from": "h7",
        "to": "g7"
    },
    {
        "from": "f3",
        "to": "d2"
    },
    {
        "from": "e4",
        "to": "e1"
    },
    {
        "from": "h5",
        "to": "g6"
    },
    {
        "from": "g7",
        "to": "g6"
    },
    {
        "from": "d2",
        "to": "c4"
    },
    {
        "from": "h6",
        "to": "h5"
    },
    {
        "from": "c4",
        "to": "a5"
    },
    {
        "from": "h5",
        "to": "h4"
    },
    {
        "from": "g3",
        "to": "h2"
    },
    {
        "from": "e1",
        "to": "d1"
    },
    {
        "from": "a5",
        "to": "c4"
    },
    {
        "from": "d1",
        "to": "d3"
    },
    {
        "from": "c7",
        "to": "c6"
    },
    {
        "from": "h4",
        "to": "h3"
    },
    {
        "from": "g2",
        "to": "f1"
    },
    {
        "from": "f7",
        "to": "d8"
    },
    {
        "from": "c6",
        "to": "b6"
    },
    {
        "from": "d8",
        "to": "f7"
    },
    {
        "from": "h2",
        "to": "g3"
    },
    {
        "from": "d3",
        "to": "d1"
    },
    {
        "from": "f1",
        "to": "e2"
    },
    {
        "from": "d1",
        "to": "d4"
    },
    {
        "from": "c4",
        "to": "e3"
    },
    {
        "from": "f6",
        "to": "e5"
    },
    {
        "from": "d6",
        "to": "d7"
    },
    {
        "from": "g6",
        "to": "h7"
    },
    {
        "from": "g3",
        "to": "e5"
    },
    {
        "from": "f7",
        "to": "e5"
    },
    {
        "from": "e3",
        "to": "f5"
    },
    {
        "from": "d4",
        "to": "d7"
    },
    {
        "from": "b6",
        "to": "h6"
    },
    {
        "from": "h7",
        "to": "g8"
    },
    {
        "from": "h6",
        "to": "h3"
    },
    {
        "from": "d7",
        "to": "a7"
    },
    {
        "from": "h3",
        "to": "g3"
    },
    {
        "from": "g8",
        "to": "f8"
    },
    {
        "from": "e2",
        "to": "e3"
    },
    {
        "from": "a7",
        "to": "a4"
    },
    {
        "from": "f5",
        "to": "d4"
    },
    {
        "from": "f8",
        "to": "f7"
    },
    {
        "from": "g3",
        "to": "g5"
    },
    {
        "from": "a4",
        "to": "a3"
    },
    {
        "from": "e3",
        "to": "e4"
    },
    {
        "from": "e5",
        "to": "d3"
    },
    {
        "from": "g5",
        "to": "f5"
    },
    {
        "from": "f7",
        "to": "g6"
    },
    {
        "from": "f2",
        "to": "f3"
    },
    {
        "from": "d3",
        "to": "f2"
    },
    {
        "from": "e4",
        "to": "f4"
    },
    {
        "from": "f2",
        "to": "d3"
    },
    {
        "from": "f4",
        "to": "e4"
    },
    {
        "from": "d3",
        "to": "f2"
    },
    {
        "from": "e4",
        "to": "f4"
    },
    {
        "from": "f2",
        "to": "d3"
    },
    {
        "from": "f4",
        "to": "e4"
    },
    {
        "from": "d3",
        "to": "f2"
    },
    {
        "from": "e4",
        "to": "f4"
    },
    {
        "from": "f2",
        "to": "d3"
    },
    {
        "from": "f4",
        "to": "e4"
    },
    {
        "from": "d3",
        "to": "f2"
    },
    {
        "from": "e4",
        "to": "f4"
    },
    {
        "from": "f2",
        "to": "d3"
    },
    {
        "from": "f4",
        "to": "e4"
    }
]
/*
let moveList = [
    {
        "from": "g1",
        "to": "f3"
    },
    {
        "from": "g8",
        "to": "f6"
    },
    {
        "from": "g2",
        "to": "g3"
    },
    {
        "from": "g7",
        "to": "g6"
    },
    {
        "from": "f1",
        "to": "g2"
    },
    {
        "from": "f8",
        "to": "g7"
    },
    {
        "from": "e1",
        "to": "g1"
    },
    {
        "from": "e8",
        "to": "g8"
    },
    {
        "from": "d2",
        "to": "d3"
    },
    {
        "from": "d7",
        "to": "d6"
    },
    {
        "from": "e2",
        "to": "e4"
    },
    {
        "from": "b8",
        "to": "c6"
    },
    {
        "from": "b1",
        "to": "c3"
    },
    {
        "from": "c8",
        "to": "d7"
    },
    {
        "from": "f1",
        "to": "e1"
    },
    {
        "from": "d7",
        "to": "g4"
    },
    {
        "from": "c1",
        "to": "g5"
    },
    {
        "from": "d8",
        "to": "d7"
    },
    {
        "from": "d1",
        "to": "d2"
    },
    {
        "from": "f8",
        "to": "e8"
    },
    {
        "from": "g5",
        "to": "h6"
    },
    {
        "from": "g7",
        "to": "h8"
    },
    {
        "from": "f3",
        "to": "g5"
    },
    {
        "from": "a8",
        "to": "d8"
    },
    {
        "from": "c3",
        "to": "d5"
    },
    {
        "from": "d7",
        "to": "c8"
    },
    {
        "from": "d2",
        "to": "f4"
    },
    {
        "from": "c6",
        "to": "e5"
    },
    {
        "from": "d3",
        "to": "d4"
    },
    {
        "from": "f6",
        "to": "h5"
    },
    {
        "from": "f4",
        "to": "e3"
    },
    {
        "from": "e5",
        "to": "c6"
    },
    {
        "from": "e3",
        "to": "b3"
    },
    {
        "from": "c6",
        "to": "d4"
    },
    {
        "from": "b3",
        "to": "c4"
    },
    {
        "from": "g4",
        "to": "e6"
    },
    {
        "from": "g5",
        "to": "e6"
    },
    {
        "from": "c8",
        "to": "e6"
    },
    {
        "from": "h6",
        "to": "e3"
    },
    {
        "from": "d4",
        "to": "c6"
    },
    {
        "from": "d5",
        "to": "c7"
    },
    {
        "from": "e6",
        "to": "c4"
    },
    {
        "from": "c7",
        "to": "e8"
    },
    {
        "from": "h8",
        "to": "b2"
    },
    {
        "from": "e8",
        "to": "c7"
    },
    {
        "from": "b2",
        "to": "a1"
    },
    {
        "from": "c7",
        "to": "d5"
    },
    {
        "from": "c4",
        "to": "c2"
    },
    {
        "from": "d5",
        "to": "e7"
    },
    {
        "from": "g8",
        "to": "g7"
    },
    {
        "from": "e7",
        "to": "c6"
    },
    {
        "from": "c2",
        "to": "c6"
    },
    {
        "from": "e1",
        "to": "a1"
    },
    {
        "from": "g7",
        "to": "g8"
    },
    {
        "from": "e3",
        "to": "a7"
    },
    {
        "from": "d8",
        "to": "a8"
    },
    {
        "from": "a7",
        "to": "d4"
    },
    {
        "from": "a8",
        "to": "a4"
    },
    {
        "from": "d4",
        "to": "e3"
    },
    {
        "from": "c6",
        "to": "c3"
    },
    {
        "from": "a1",
        "to": "f1"
    },
    {
        "from": "h5",
        "to": "f6"
    },
    {
        "from": "e3",
        "to": "f4"
    },
    {
        "from": "f6",
        "to": "e4"
    },
    {
        "from": "f4",
        "to": "e3"
    },
    {
        "from": "a4",
        "to": "a2"
    },
    {
        "from": "g2",
        "to": "e4"
    },
    {
        "from": "c3",
        "to": "e5"
    },
    {
        "from": "e4",
        "to": "b7"
    },
    {
        "from": "d6",
        "to": "d5"
    },
    {
        "from": "e3",
        "to": "f4"
    },
    {
        "from": "e5",
        "to": "e6"
    },
    {
        "from": "f4",
        "to": "e3"
    },
    {
        "from": "e6",
        "to": "d7"
    },
    {
        "from": "b7",
        "to": "d5"
    },
    {
        "from": "d7",
        "to": "d5"
    },
    {
        "from": "f1",
        "to": "e1"
    },
    {
        "from": "g8",
        "to": "g7"
    },
    {
        "from": "e3",
        "to": "f4"
    },
    {
        "from": "g7",
        "to": "f6"
    },
    {
        "from": "f4",
        "to": "e5"
    },
    {
        "from": "f6",
        "to": "f5"
    },
    {
        "from": "e5",
        "to": "h8"
    },
    {
        "from": "f5",
        "to": "g4"
    },
    {
        "from": "h8",
        "to": "g7"
    },
    {
        "from": "d5",
        "to": "f5"
    },
    {
        "from": "g7",
        "to": "d4"
    },
    {
        "from": "f5",
        "to": "d5"
    },
    {
        "from": "d4",
        "to": "f6"
    },
    {
        "from": "d5",
        "to": "f5"
    },
    {
        "from": "f6",
        "to": "d4"
    },
    {
        "from": "f5",
        "to": "d5"
    },
    {
        "from": "d4",
        "to": "f6"
    },
    {
        "from": "d5",
        "to": "f5"
    },
    {
        "from": "f6",
        "to": "d4"
    },
    {
        "from": "f5",
        "to": "d5"
    },
    {
        "from": "d4",
        "to": "f6"
    },
    {
        "from": "d5",
        "to": "f5"
    },
    {
        "from": "f6",
        "to": "d4"
    },
    {
        "from": "f5",
        "to": "d5"
    },
    {
        "from": "d4",
        "to": "f6"
    },
    {
        "from": "d5",
        "to": "f5"
    },
    {
        "from": "f6",
        "to": "d4"
    }
]*/

class ChessBoard extends React.Component {
    constructor(props) {
        super(props)
        this.playMode = true
        this.moveIdx = 0
        this.state = {
            chess: new Chess()
        }
        this.chessWrapperRef = React.createRef()
    }

    makeMoveOrReset() {
        let chess = this.state.chess
        if (this.moveIdx == moveList.length) {
            this.setState({
                chess: new Chess(),
                lastMove: null
            })
            this.moveIdx = 0
            return
        }
        let move = moveList[this.moveIdx]
        chess.move(move)
        this.setState({
            chess: chess,
            lastMove: [move.from, move.to]
        })
        this.moveIdx++
    }

    popMove() {
        let chess = this.state.chess
        if (this.moveIdx == 0) {
            return
        }
        chess.undo()
        this.setState({
            chess: chess,
            lastMove: null
        })
        this.moveIdx--
    }

    selectRight(){
        this.playMode = false
        this.makeMoveOrReset()
    }

    selectLeft(){
        this.playMode = false
        this.popMove()
    }

    handleKeyDown(e) {
        e.preventDefault()
        if (e.code === "ArrowRight") {
            this.selectRight()
        } else if (e.code === "ArrowLeft") {
            this.selectLeft()
        }
    }

    chessWrapperClick(e) {
        console.log("Clicked")
        this.chessWrapperRef.current.focus()
    }

    togglePaused() {
        this.playMode = !this.playMode
        if (this.playMode) {
            this.tick()
        }
    }

    tick() {
        if (!this.playMode) {
            return
        }
        this.makeMoveOrReset()
        setTimeout(this.tick.bind(this), 1000)
    }

    componentDidMount() {
        this.tick()
    }

    getFen() {
        let fen = this.state.chess.fen()
        return fen
    }
    render() {
        let toggleIconUrl = null
        if (this.playMode) {
            toggleIconUrl = "img/pause.png"
        } else {
            toggleIconUrl = "img/play.png"
        }
        return <div onKeyDown={this.handleKeyDown.bind(this)} tabIndex="0"
            onClick={this.chessWrapperClick.bind(this)}
            ref={this.chessWrapperRef}
            className="chessgroundWrapper">
            <Chessground
                fen={this.getFen()}
                lastMove={this.state.lastMove}
                width={this.props.width}
                height={this.props.height}
            />
            <div style={{ display: "flex", justifyContent: "center", padding: "8px" }} >
                <img src={toggleIconUrl}
                    style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "5px",
                        cursor: "pointer"
                    }}
                    onClick={this.togglePaused.bind(this)} />

                <img src="img/left.png"
                    style={{
                        marginLeft: "5px",
                        width: "50px",
                        height: "50px",
                        cursor: "pointer"
                    }}
                    onClick={this.selectLeft.bind(this)} />

                <img src="img/right.png"
                    style={{
                        width: "50px",
                        height: "50px",
                        cursor: "pointer"
                    }}
                    onClick={this.selectRight.bind(this)} />
            </div>
        </div >
    }
}

export { ChessBoard }
