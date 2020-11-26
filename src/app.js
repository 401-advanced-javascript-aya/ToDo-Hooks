import React from 'react';

import ToDo from './components/todo/todo-connected';
import FilterProvider from './context/filter'
export default class App extends React.Component {
  render() {
    return (
      <>
      <FilterProvider>
        <ToDo />
      </FilterProvider>
      </>
    );
  }
}
