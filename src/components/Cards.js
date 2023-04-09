import { Card, Stack } from '../assets/data/Exports';
import Button from 'react-bootstrap/Button';

export const Cards = (props) => {
  return (
    <Card className='text-black mb-3 p-3'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className='px-0'>
        <Stack
        direction='horizontal'
        className='justify-content-between align-items-baseline'
        style={{marginBottom: '-15px'}}
        >
          <Card.Text className='mb-2'>
            {props.title}
          </Card.Text>
          <Stack direction='vertical' className='flex-grow-0 align-items-end'>
            <Card.Text className='mb-1 fs-6'>Current bid</Card.Text>
            <Card.Title>{props.bid}</Card.Title>
          </Stack>
        </Stack>
      <Card.Title className='mb-4'>{props.desp}</Card.Title>
      <Button className='cardBtn'>Place a bid</Button>
      </Card.Body>
    </Card>
)};