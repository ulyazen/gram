import React from 'react'
import {
  Container,
  Navbar,
  Nav,
  Button,
  FormControl,
  Form,
  InputGroup
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faPaperPlane,
  faPlusSquare
} from '@fortawesome/free-solid-svg-icons'
function TopNav () {
  return (
    <div className='m-0'>
      <Navbar className='no-background' variant='dark'>
        <Container>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto '>
              <div className='input-group'>
                <InputGroup.Text
                  className='input-group-text border-0'
                  style={{ backgroundColor: '#ABABAB26' }}
                >
                  <FontAwesomeIcon
                    className='mx-2'
                    style={{ color: 'grey' }}
                    size='lg'
                    icon={faBell}
                  />
                  <FormControl
                    className='me-2 bg-transparent border-0'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                </InputGroup.Text>
              </div>
            </Nav>
            <Nav className='mx-3'>
              <Nav.Link href='#deets'>
                <FontAwesomeIcon
                  className='mx-2'
                  style={{ color: 'white' }}
                  size='lg'
                  icon={faBell}
                />
              </Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                <FontAwesomeIcon
                  className='mx-2'
                  size='lg'
                  style={{ color: 'white' }}
                  icon={faPaperPlane}
                />
              </Nav.Link>
            </Nav>
            <Button variant='outline-success'>
              <FontAwesomeIcon icon={faPlusSquare} className='mx-2' />
              Create Post
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopNav
