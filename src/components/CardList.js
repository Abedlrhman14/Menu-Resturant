import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Zoom } from 'react-awesome-reveal'

const CardList = ({itemsData}) => {
  return (
    <Row> 
        <Zoom left>
        {
            itemsData.length >= 1? (itemsData.map((Item)=>{
                return (     
                     <Col sm="12" className='mb-3' >
                        <Card key={Item} className='d-flex flex-row' style={{backgroundcolor: '#F8F8F8'}} >
                            <Card.Img style={{width:"252px"}} className='img-item' variant="top" src={Item.imgurl}/>
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-between'>
                                        <div className='item-title'>{Item.title}</div>
                                        <div className='item-price'>{Item.price}</div>
                                    </Card.Title>
                                    <Card.Text className='py-2'>
                                    <div className='item-description'>{Item.description}</div>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                  </Col>)
            })) : <h3 className="text-center">'No item'</h3>
        }
        </Zoom>
  </Row>
  )
}

export default CardList
