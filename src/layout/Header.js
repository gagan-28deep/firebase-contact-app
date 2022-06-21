import React from 'react'
import {Navbar , NavbarBrand , NavbarText} from 'reactstrap'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <Navbar color="info" light >
        <NavbarBrand tag={Link} to = '/' className='text-white'>
            My Contact APP
        </NavbarBrand>
        <NavbarText className='text-white floor-right'>
            A simple Contact app
        </NavbarText>
    </Navbar>
  )
}

export default Header