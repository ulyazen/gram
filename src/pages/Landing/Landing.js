import React from 'react'
import { Card } from 'react-bootstrap'
import './Landing.css'
import img from '../../assets/images/DumbGram.png'
import Primary from '../../components/button/Primary'
import Secondary from '../../components/button/Secondary'
import ImageGrid from '../../components/imageGrid/imageGrid'
export default function landing () {
  return (
    <div className='body'>
      <Card
        style={{ width: '25rem', backgroundColor: 'black' }}
        className='card'
      >
        <Card.Img variant='top' className='my-5' src={img} />
        <Card.Body className='mt-4'>
          <Card.Title className='text-white font-weight-bold'>
            <h1>Share your best photos or videos</h1>
          </Card.Title>
          <Card.Text className='text-secondary my-4'>
            Join now, share your creations with another people and enjoy other
            creations.
          </Card.Text>
        </Card.Body>
        <div className='d-flex mx-3'>
          <Primary />
          <Secondary />
        </div>
      </Card>
      <ImageGrid></ImageGrid>
    </div>
  )
}
