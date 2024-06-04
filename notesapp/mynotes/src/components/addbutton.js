import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Addicon } from '../assets/add.svg'

const addbutton = () => {
  return (
    <div className='floating-button'>
        <Link to='note/new/'>
            <Addicon/>
        </Link>
    </div>
  )
}

export default addbutton