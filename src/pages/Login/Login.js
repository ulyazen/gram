import React from 'react'
import './Login.css'
import '../../components/button/button.css'
import { Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Login () {
  return (
    <div className='body'>
      <Card style={{ width: '25rem', backgroundColor: 'black' }}>
        <Card.Body className='mt-4'>
          <Card.Title className='text-white font-weight-bold'>
            <h1>Login</h1>
          </Card.Title>
          <Form className='text-white'>
            <Form.Group className='my-4' controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <div className='d-grid gap-2 mt-5'>
              <Button className='gradient border-0' size='lg'>
                <Link to='/'>Login</Link>
              </Button>
            </div>
            <div className='my-3 text-center'>
              <Form.Text className='text-muted'>
                Don't have an account ? Klik Here
              </Form.Text>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
