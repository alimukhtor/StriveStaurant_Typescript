import ListGroup from 'react-bootstrap/ListGroup'
import {Comment} from '../types/index'

interface DishCommmentsProps{
  selectedDish:string[]
}
const DishComments = ({selectedDish}:DishCommmentsProps) => (
  <ListGroup>
    {/* {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )} */}
  </ListGroup>
)

export default DishComments