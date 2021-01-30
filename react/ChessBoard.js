
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

//Renders the chess board with a panel for changing the moves
class ChessBoard extends React.Component {

    constructor(props) {
        super(props)
        //Whether to make a move every second
        this.playMode = true
        //Current index in the above move list
        this.moveIdx = 0
        //Stores the state of the board to display
        this.state = {
            chess: new Chess(),
            lastMove: null
        }
        //We need access to the dom node that is rendered
        this.chessWrapperRef = React.createRef()
    }

    //Change state to the next move in the move list or the first move
    makeMoveOrReset() {
        let chess = this.state.chess
        if (this.moveIdx == moveList.length) {
            //Set state for the starting position
            this.setState({
                chess: new Chess(),
                lastMove: null
            })
            this.moveIdx = 0
            return
        }
        //Make the move
        let move = moveList[this.moveIdx]
        chess.move(move)
        //Set state
        this.setState({
            chess: chess,
            lastMove: [move.from, move.to]
        })
        this.moveIdx++
    }

    popMove() {
        let chess = this.state.chess
        if (this.moveIdx == 0) {
            //Don't do anything if this is the first move
            return
        }
        //Go to the previous position
        chess.undo()
        //Set state
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
        //Focus on the wrapper so we can get on key down events
        this.chessWrapperRef.current.focus()
    }

    togglePaused() {
        //Change the play mode
        this.playMode = !this.playMode
        //If we changed from paused to play, start the play loop
        if (this.playMode) {
            this.tick()
        }
    }

    tick() {
        //If not play mode, end this infinite loop
        if (!this.playMode) {
            return
        }
        //Make a move
        this.makeMoveOrReset()
        //Continue in loop
        setTimeout(this.tick.bind(this), 1000)
    }

    componentDidMount() {
        //Start the play loop once when it is first rendered
        this.tick()
    }

    render() {
        //The play/pause icon
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
                fen={this.state.chess.fen()}
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
