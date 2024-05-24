import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function List() {
  return (
    <div className='mx-3 py-3 '>
         <Card style={{ width: '60rem' }}>
        <Card.Title className='px-3 mt-2'>Name</Card.Title>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1u05OPc7MSt9f5Dg2QMSbRPu_FHowIjog-jxeSwHIw&s" />
      <div className='d-flex justify-content-between p-2'>

        <Button variant=''><i className="fa-regular fa-thumbs-up"></i> like</Button>
        <Button variant=''><i class="fa-regular fa-comments"></i> comment</Button>
        <Button variant=''><i class="fa-regular fa-bookmark"></i> save</Button>
      </div>
      </Card.Body>
    </Card>

    </div>
  )
}

export default List