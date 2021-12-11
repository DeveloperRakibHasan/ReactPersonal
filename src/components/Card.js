import React from 'react';
import CardItem from './CardItem'
import '../Style/Card.css';



function Cards() {
  return (
    <div className='cards'>
      <h1 className="ced">Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../img/img-1.jpg').default}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='E-comarce'
              path='/service'
            />
            <CardItem
              src={require('../img/img-2.jpg').default}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Food / Delivary'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../img/img-3.jpg').default}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Personal'
              path='/services'
            />
            <CardItem
              src={require('../img/img-4.jpg').default}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Fashion'
              path='/products'
            />
            <CardItem
              src={require('../img/img-5.png').default}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Website'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;