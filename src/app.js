import React from 'react';

import ToDo from './components/todo/todo-connected';
import SettingProvider from './context/setting.js';
export default class App extends React.Component {
  render() {
    return (
      <>
      <SettingProvider>
        <ToDo />
      </SettingProvider>
      </>
    );
  }
}
