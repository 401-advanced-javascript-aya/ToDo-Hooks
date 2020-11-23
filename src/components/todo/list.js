import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoList(props) {
const {list, handleComplete, handleDelete} = props
   return (
    <ul>
        {list.map(item => (
          <ListGroup.Item action variant="danger"  className={`complete-${item.complete.toString()}`}
          key={item._id} id='listing' style={{background: ' rgba(255, 192, 203, 0)',padding: '0px',marginLeft:'5px'}} >
          <button onClick={() => handleDelete(item._id)}>x</button>
           
            <span onClick={() => handleComplete(item._id)}>
            <strong> Difficulty: {item.difficulty} </strong><br></br>

            <strong> {item.assignee} </strong>{item.text}
            </span>
          
       </ListGroup.Item>
        ))}
      </ul>
  )
}




// export default TodoList;
