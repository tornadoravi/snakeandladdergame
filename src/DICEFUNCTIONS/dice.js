import React, { useState } from 'react'
import boxArr from '../BOXARRAY/boxarry'
import GameTitle from '../assects/snl-logo.75a58625.png'
import './dice.css'
import PlayersFunction from '../PLAYEROPERANTIONS/Props'
import Reset from '../RESETGAME/restet'



let refClickCount = 0
export default function Dice() {
  const [diceRoll, setDiceRoll] = useState("start")
  const [player1Position, setPlayer1Position] = useState(1)
  const [player2Position, setPlayer2Position] = useState(1)
  const [playerswinner, setPlayerwinner] = useState()
  const [randomdice, setrandomdice] = useState(1)
  const [player1currentposition, setplayercurrentposition] = useState(1)
  const [player2currentposition, setplayer2currentposition] = useState(1)
  // const [playerturn, setPlayerturn] = useState("CLICK")


  function dicerollfunction() {
    let diceRandom = (Math.floor(Math.random() * 6) + 1)
    if ((player1Position + diceRandom) <= 100 && (player2Position + diceRandom) <= 100) {
      refClickCount += 1


      if (refClickCount % 2 === 1) {
        console.log("player1", diceRandom, refClickCount)
        // setPlayerturn("PLAYER 1 TURN")
        setDiceRoll("PLAYER-1💠ROLL DICE")
        setrandomdice(diceRandom)
        boxArr.forEach(elements => {
          elements.players.Player1 = ''
        })
        boxArr.forEach((ids) => {
          if (ids.id === `boxId${(player1Position + diceRandom)}`) {
            if (ids.to !== '') {
              boxArr.forEach(cell => {
                if (ids.to === cell.cellNUM) {
                  // console.log("valid3")
                  let indexvalue = boxArr.indexOf(cell)
                  boxArr[indexvalue].players.Player1 = 'in'
                  // console.log("valid5")
                  setPlayer1Position(cell.cellNUM)
                  setplayercurrentposition((cell.cellNUM))

                }
              })
              setPlayer1Position(ids.to)

            }

            else {
              ids.players.Player1 = 'in'
              setPlayer1Position(player1Position + diceRandom)
              setplayercurrentposition((player1Position + diceRandom))
            }
          }
        })

      }
      else if (refClickCount % 2 === 0) {
        console.log("player2", diceRandom, refClickCount)
        // setPlayerturn("PLAYER 2 TURN")
        setDiceRoll("PLAYER-2🔘ROLL DICE")

        setrandomdice(diceRandom)
        boxArr.forEach(elements => {
          elements.players.Player2 = ''
        })

        boxArr.forEach((ids) => {
          if (ids.id === `boxId${(player2Position + diceRandom)}`) {

            if (ids.to !== '') {
              boxArr.forEach(cell => {
                if (ids.to === cell.cellNUM) {
                  let indexvalue = boxArr.indexOf(cell)
                  boxArr[indexvalue].players.Player2 = 'in'
                  setPlayer2Position(cell.cellNUM)
                  setplayer2currentposition((cell.cellNUM))
                }
              })
              setPlayer2Position(ids.to)

            }

            else {
              ids.players.Player2 = 'in'
              setPlayer2Position(player2Position + diceRandom)
              setplayer2currentposition((player2Position + diceRandom))
            }
          }
        })
      }
    }
    else {
      console.log('arrest limit')
    }
    if ((player1Position) === 100) {
      setPlayerwinner("player1winner")
      console.log('player 1 winner')
    }
    else if ((player2Position) === 100) {
      setPlayerwinner("player2winner")
      console.log('player 2 winner')
    }
  }
  return (
    <div className="bodysmain">
      <div className='playersRollDice'>
        <div className="sprate">
          <div className="sidenav">

            <img id='gametitleid' src={GameTitle} alt="" />
            <div className="mains">
              <div className="main2">
                <h1 className='diceroll'>{diceRoll}</h1>
                <h1 ><span className='dicerandoms'>{randomdice}</span></h1>
                <button id='dicerollbutton' onClick={dicerollfunction}>CLICK</button>
                {/* <h1>{diceRandom}</h1> */}


              </div>
              <div className="main3">
                <h1 className='currentpostion1'>player <span className='player1span'> 1 </span> position {player1currentposition}</h1>

                <h1 className='currentpostion2'>player <span className='player2span'> 2 </span> position {player2currentposition}</h1>

              </div>
              <div className="main4">
                <h1 className='playerswinners' >{playerswinner}</h1>
                <Reset />
              </div>

            </div>
          </div>

          <div className="main1">
            <div className='boardsgrid'>
              {
                boxArr.map(ele => <PlayersFunction key={ele.from} id={ele.id} players={ele.players} className={ele.className} cellNUM={ele.cellNUM} splCel={ele.icon} />)

              }
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
