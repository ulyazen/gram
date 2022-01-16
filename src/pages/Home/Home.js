import React from 'react'
import icon1 from '../../assets/images/DumbGram.png'
import profil from '../../assets/images/Ellipse 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'
import {
  faHome,
  faCalendar,
  faLockOpen,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import { Card, Row, Col, Container, Navbar } from 'react-bootstrap'
import Side from '../../components/button/Side'
import TopNav from '../../components/TopNav/TopNav'
import Image from 'react-bootstrap/Image'
import ImageGrid from '../../components/imageGrid/imageGrid'
function Home () {
  return (
    <Container fluid className='no-background'>
      <Row>
        <Col sm={4} className=' p-0 m-0 '>
          <Card
            style={{ backgroundColor: 'black' }}
            className='text-white h-100 p-5 rounded-0'
          >
            <img src={icon1} alt='icon' width='150'></img>
            <div className='my-5 d-flex justify-content-center'>
              <img src={profil} alt='profil' width='150' />
            </div>

            <Card.Body>
              <Card.Title className='text-center'>Lisa</Card.Title>
              <Card.Text className='text-center'>@lalisa_m</Card.Text>

              <Row className='text-center'>
                <Col>Posts</Col>

                <Col>Followers</Col>
                <Col>Following</Col>
              </Row>

              <Row className='text-center'>
                <Col>200</Col>
                <Col>51.2 M</Col>
                <Col>1</Col>
              </Row>
              <Card.Text className='mt-3 text-center'>
                Rapper in Black Pink, Brand Ambasador Penshoppe
              </Card.Text>
              <hr />

              <div>
                <Side text='Feed' icon={faHome} />
                <Side text='Explore' icon={faCalendar} />

                <hr />
                <Side text='Logout' icon={faSignOutAlt} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} className='main-content p-0 m-0' tag='main'>
          <TopNav />
          <div className='p-3'>
            <h1 className='m-2 text-white'>Explore</h1>
            <ImageGrid />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
