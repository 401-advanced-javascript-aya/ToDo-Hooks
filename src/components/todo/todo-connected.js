import React, { useEffect, useState } from 'react';
import TodoForm from './formHooks';
import TodoList from './list.js';
import Card from 'react-bootstrap/Card';



import './todo.scss';
import useAjax from '../hooks/useAjax';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {
  const [list, setList] = useState([]);
  const [getFunc, postFunc, putFunc ,deletingFunc ] = useAjax(list,setList);
  
  
  const _addItem = (item) => {
    
    postFunc(item)
    
  };

  const _toggleComplete = id => {
    putFunc(id)
    
};



  const _getTodoItems = () => {
    
    getFunc()
    
    
  };
  const deletingTask = (id) => {

    deletingFunc(id)
    console.log('deleteeeeeeeee',id);
  }

  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo" style={{ marginLeft: '70px' }}>

                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>

                            <TodoForm handleSubmit={_addItem} />
                        </Card.Body>
                    </Card>
                </div>

        <div>
          <TodoList
            list={list}
            handleComplete={putFunc}
            handleDelete={deletingTask}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
