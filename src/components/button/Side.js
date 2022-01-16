import React from 'react'
import './button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

function Side (props) {
  return (
    <div className='d-grid gap-1 justify-content-start'>
      <Button size='md' className='my-2 bg-transparent border-0'>
        <i className='mx-2'>
          <FontAwesomeIcon icon={props.icon} />
        </i>
        {props.text}
      </Button>
    </div>
  )
}

export default Side
