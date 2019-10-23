import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Erro from './components/Erro';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import New from './components/New';
import firebase from './firebase'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      firebasaseInitialized: false
    }
  }

  componentDidMount(){

    firebase.isInitialized().then(res =>{
      console.log(res, "res")

      this.setState({
        firebasaseInitialized: res
      })
    })
  
  
  }

  render(){
    return this.state.firebasaseInitialized !== false ? (
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/dashboard/new" component={New}></Route>



          <Route path="*" component={Erro}></Route>
        </Switch>
      </BrowserRouter>
    ): (
      <div className="container">
        <h1>Carregando...</h1>
      </div>
    )
  }
}

export default App;
