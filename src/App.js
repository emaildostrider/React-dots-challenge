import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Drawer from './Drawer'
import reducers from './reducers' 

class App extends Component{
  render(){
    const store = createStore(reducers)
    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    )
  }
}

export default App