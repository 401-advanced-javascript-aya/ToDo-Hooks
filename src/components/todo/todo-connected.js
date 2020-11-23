import React, { useEffect, useState } from 'react';
import TodoForm from './formHooks';
import TodoList from './list.js';
import axios from 'axios';


import './todo.scss';
import useAjax from '../hooks/useAjax';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {
  const [list, setList] = useState([]);
  const [getFunc, postFunc, putFunc ,deletingFunc ] = useAjax(list,setList);
  
  console.log('hi');
  
  const _addItem = (item) => {
    // axios({
    //   method: 'post',
    //   url: todoAPI,
    //   data: item
    // }).then(savedItem => {
    //   console.log('logggggggg',savedItem.data);
    //     setList([...list, savedItem.data])
    //   })
    //   .catch(console.error);
    postFunc(item)
    // fetch(todoAPI, {
    //   method: 'post',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(item)
    // })
    //   .then(response => response.json())
    //   .then(savedItem => {
    //     setList([...list, savedItem])
    //   })
    //   .catch(console.error);
  };

  const _toggleComplete = id => {
    putFunc(id)
    // let item = list.filter(i => i._id === id)[0] || {};

    // if (item._id) {

    //   item.complete = !item.complete;

    //   let url = `${todoAPI}/${id}`;
    //   axios.put(url, item)
    //   .then(savedItem => {
    //       setList(list.filter(listItem => listItem._id === item._id ? savedItem.item : listItem));
    //   })
      
// };
    // if (item._id) {

    //   item.complete = !item.complete;

    //   let url = `${todoAPI}/${id}`;
    //   axios.put(url, item)
    //   .then(savedItem => {
    //       console.log('put  -->', savedItem);
    //       console.log('put item -->', item);
    //       console.log('put list -->', list);
    //       callback(list.filter(listItem => listItem._id === item._id ? savedItem.item : listItem));
    //   })
    //   fetch(url, {
    //     method: 'put',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(item)
    //   })
    //     .then(response => response.json())
    //     .then(savedItem => {
    //       setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
    //     })
    //     .catch(console.error);
    // }
  // };
 
};
// delete function


  const _getTodoItems = () => {
    
    getFunc()
    
    // fetch(todoAPI, {
    //   method: 'get',
    //   mode: 'cors',
    // })
    //   .then(data => data.json())
    //   .then(data => setList(data.results))
    //   .catch(console.error);
  };
  const deletingTask = (item) => {
    
    deletingFunc(item)
    console.log('deleteeeeeeeee');
  }

  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
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
