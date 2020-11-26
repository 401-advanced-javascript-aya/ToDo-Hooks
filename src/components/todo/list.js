import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';


export default function TodoList(props) {
const {list, handleComplete, handleDelete} = props
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);

   return (
     <>
    <ul>
        {list.map(item => (
          // <ListGroup.Item action variant="danger"  className={`complete-${item.complete.toString()}`}
          // key={item._id} id='listing' style={{background: ' rgba(255, 192, 203, 0)',padding: '0px',marginLeft:'5px', border:'0px'}} >

    <Card className={`complete-${item.complete.toString()}`}
          key={item._id} id='listing' style={{margin:'10px', boxShadow: '5px 5px 8px 5px #d6ebe8', width:'500px'}}>
        <Card.Body >
          
          <div id='containHead'>
            <div>
          <span id='content' onClick={() => handleComplete(item._id)}>
            {item.complete? 'completed': 'pending'}
           </span>
           <strong style={{marginRight:'200px'}}> {item.assignee} </strong>
            </div>

        <button id='xButton' onClick={() => handleDelete(item._id)}>x</button></div> 
          <br></br><hr></hr>
           {item.text}<br></br>
           <strong> Difficulty: {item.difficulty} </strong>
        </Card.Body>
    </Card>
          
          
      //  </ListGroup.Item>
        ))}
      </ul>
      <div onClick={() =>handlecomplete(paginationBasic)}></div>

    </>
  )
}




