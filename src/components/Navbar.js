import React, { useState } from 'react'
import { Row,Nav,Form,Button,NavDropdown,FormControl,Container,Navbar } from 'react-bootstrap'

const NavBar = ({filterbysearch}) => {
    const [searchValue,setsearchValue] = useState('')
    const onSearch=()=>
        {
            filterbysearch(searchValue)
            setsearchValue('')
        }
  return (
    <Row>
        <Navbar expand="lg"  bg='dark' variant='dark'>
            <Container >
                <Navbar.Brand href="#">
                    <div className='brand-color'>New Resturant</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                
                </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className="mx-2"
                        onChange={(e)=> setsearchValue(e.target.value)}
                        value={searchValue}
                        />
                        <Button onClick={()=> onSearch()} className='btn-search'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Row>
  )
}

export default NavBar
