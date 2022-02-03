import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import menuJson from '../data/menu.json'
import {Dish} from '../types/index'
import DishComments from './DishComments'
import { Col, Row, Container } from 'react-bootstrap'

const menu = menuJson as Dish[]
const Details = () => {
  const [pasta, setPasta] = useState<Dish>({image:'', name:'', id:0, description:'', comments:[]})

  const params = useParams()

  useEffect(() => {
    let pastaId = params.pastaId
    let pastaToShow = menu.find((pasta) => pasta.id.toString() === pastaId)

    if (!pastaToShow) return alert("Something went really wrong...")

    setPasta(pastaToShow)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6} className='text-center'>
          {pasta ? (
            <>
              <h1>{pasta.name}</h1>
              <h3>Pasta Details</h3>
              <img src={pasta.image} alt='detail pic' className='my-3' />
              <p>{pasta.description}</p>
              <DishComments selectedDish={pasta} />
            </>
          ) : (
            <h2>404 - Pasta not found</h2>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Details