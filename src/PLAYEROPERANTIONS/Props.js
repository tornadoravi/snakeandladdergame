import React from 'react'
import './props.css'
const PlayersFunction = ({ id, className, cellNUM,players,splCel}) => {
  let playersCoins = players
  let player1Coin;
  let player2Coin;
  if (playersCoins.Player1 === 'in') {
    player1Coin = <span className='move coins1'>💠</span>
  }
  if (playersCoins.Player2 === 'in') {
    player2Coin = <span className='move coins2'>🔘</span>
  }
  return (
    <div className='props'>
      <div id={id} className={className}>
        <h1 className='numtitle'>{cellNUM}</h1>
        {player1Coin}
        {player2Coin }
        <p className='splcelicons'>{splCel}</p>
      </div>
    </div>
  )
}
export default PlayersFunction