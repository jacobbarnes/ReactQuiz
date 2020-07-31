import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Left(props) {
    return (
        <bs.Nav className="flex-column">
            <Link to='/' className='nav-link'>Test</Link>
        </bs.Nav>
    )
}
export default Left