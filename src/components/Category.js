import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Reveal from 'react-awesome-reveal'
import { Roll } from 'react-awesome-reveal'
// to filter by category
const Category = ({filterbyCategory , allCat}) => {
    const onFilter = (cat)=>{
        filterbyCategory(cat)
    }
  return (
    <Row className='my-2 mb-5'>
        <Col sm="12" className='d-flex justify-content-center'>
        <Roll>
          {
            allCat.length >=1 ? (allCat.map((cat)=>{
              return (
                <div>
                    <button onClick={()=>onFilter(cat)} style={{border:'1px solid #b45b35'}} className='btn mx-2'>{cat}</button>
               </div>
              )
            })) : <h4>No Category</h4>
          }
           </Roll>
        </Col>
    </Row>
  )
}

export default Category
