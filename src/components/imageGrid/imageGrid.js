import React from 'react'
import { Row, Col } from 'react-bootstrap'
import img1 from '../../assets/images/Rectangle 10.png'
import img2 from '../../assets/images/Rectangle 12.png'
import img3 from '../../assets/images/Rectangle 3.png'
import img4 from '../../assets/images/Rectangle 4.png'
import img5 from '../../assets/images/Rectangle 5.png'
import img6 from '../../assets/images/Rectangle 6.png'
import img7 from '../../assets/images/Rectangle 8.png'
import img8 from '../../assets/images/Rectangle 9.png'
import './imageGrid.css'

export default function imageGrid () {
  return (
    <div className='grid d-none d-md-none d-lg-block d-xl-block'>
      <Row>
        <Col>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={6} md={4}>
              <img src={img6} alt='image1'></img>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col xs={6} md={4}>
              <img src={img5} alt='image1'></img>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img src={img1} alt='image1'></img>
            </Col>
          </Row>
        </Col>
        <Col>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={6} md={4}>
              <img src={img3} alt='image1'></img>
            </Col>
          </Row>
          <Row className='py-3 mt-1'>
            <Col xs={6} md={4}>
              <img src={img8} alt='image1'></img>
            </Col>
          </Row>
        </Col>
        <Col>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={6} md={4}>
              <img src={img2} alt='image1'></img>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col xs={6} md={4}>
              <img src={img4} alt='image1'></img>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img src={img7} alt='image1'></img>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
