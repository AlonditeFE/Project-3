import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

function Console(props){
    const [console, setConsole] = useState(null);
    const {id} = props;
    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles/' + id).then((response) => {
            setConsole(response.data);
        });
    }, [id]);

    if(!console) {
        return( <p>Loading console ID...
            <img src="https://i.pinimg.com/originals/91/ae/b3/91aeb3eb9ee689f540fe097478fc6317.gif" alt="take your time..."/>
            </p>)
    };

    return( <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={console.image} />
    <Card.Body>
      <Card.Title>{console.name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Price: ${console.price}</ListGroupItem>
      <ListGroupItem>Country: {console.country}</ListGroupItem>
      <ListGroupItem>Year: {console.releaseYear}</ListGroupItem>
    </ListGroup>
  </Card>
    );
}

export default Console;