import React, { useContext, useEffect, useState } from "react";
import TodoForm from "./formHooks";
import TodoList from "./list.js";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Card from "react-bootstrap/Card";
import usePagination from "../../components/hooks/usePagenation";

import { SettingContext } from "../../context/setting.js";
import Pages from "../pagenation/pagenation";
import Setting from "../../context/settingEditor";

import "./todo.scss";
import useAjax from "../hooks/useAjax";

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const ToDo = () => {
  const [list, setList] = useState([]);
  // const [getFunc, postFunc, putFunc ,deletingFunc ] = useAjax(list,setList);
  const [total, setTotal] = useState([]);
  const [page, setPage] = useState(1);
  const { getItemsP } = usePagination(setList);
  const [getFunc, postFunc, putFunc, deletingFunc] = useAjax(total, setTotal);
  const siteContext = useContext(SettingContext);

  const _addItem = (item) => {
    postFunc(item);
  };

  const _toggleComplete = (id) => {
    putFunc(id);
  };

  const _getTodoItems = () => {
    getFunc();
  };
  const deletingTask = (id) => {
    deletingFunc(id);
    console.log("deleteeeeeeeee", id);
  };

  useEffect(_getTodoItems, []);

  useEffect(() => {
    setPage(1);
    _getTodoItems();
  }, []);

  useEffect(() => {
    getItemsP(siteContext.numberOfItems, page, total);
  }, [page]);
  useEffect(() => {
    getItemsP(siteContext.numberOfItems, page, total);
  }, [total]);
  useEffect(() => {
    getItemsP(siteContext.numberOfItems, page, total);
  }, [siteContext.isDisplayed]);
  useEffect(() => {
    if (siteContext.sorted === 'difficulty') {
      let newTotal = total.sort((a, b) => {
        return a.difficulty - b.difficulty;
      });
      setTotal(newTotal);
    }
    getItemsP(siteContext.numberOfItems, page, total);
  }, [siteContext.sorted]);

  useEffect(() => {
    let newTotal = total.filter((item) => !item.complete);
    setTotal(newTotal);

    getItemsP(siteContext.numberOfItems, page, total);
    setPage(1);
  }, [siteContext.isDisplayed]);

  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>

        </Navbar>

        <Navbar bg="dark" variant="dark" style={{ width: '90%', margin: '0 auto', marginTop: '10px' }}>
          <Navbar.Brand href="#home">
            There are {total.filter((item) => !item.complete).length} Items To Complete
                    </Navbar.Brand>
        </Navbar>

      </header>

 <section className="todo" style={{ marginLeft: '70px' }}>

                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>

                        <TodoForm handleSubmit={_addItem} list={total} />
                        </Card.Body>
                    </Card>
                </div>
     
        <div>
          <TodoList
            setList={setList}
            list={list}
            handleComplete={putFunc}
            handleDelete={deletingTask}
          />
          <Pages changePage={setPage} list={total} />
        </div>
      </section>
      <Setting />
    </>
  );
};

export default ToDo;
