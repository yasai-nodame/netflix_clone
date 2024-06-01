import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = () => {
  return (
    <div className='titlecards'>
      <h2>Netflixで人気の作品</h2>
      <div className="card-list">
        {cards_data.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt=""></img>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
