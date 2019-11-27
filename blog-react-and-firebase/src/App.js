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
      firebasaseInitialized: false,
      stateLogin: false
    }

      this.setStateLogin = this.setStateLogin.bind(this);
  }




    setStateLogin(){

      console.log("chamou ", this.state.stateLogin)
        if(firebase.getCurrent()){
            this.setState({
                stateLogin: true
            })
        }else{
            this.setState({
                stateLogin: false
            })
        }
        console.log(this.state.stateLogin)
    }


  componentDidMount(){
    firebase.isInitialized().then(res =>{
      console.log(res, "res")
      this.setStateLogin()
      this.setState({
        firebasaseInitialized: res
      })
    })
  
  
  }

  render(){
    return this.state.firebasaseInitialized !== false ? (
      <BrowserRouter>
          <Route path="/" render={(props) => <Header {...props} stateLogin={this.state.stateLogin} newStatus={this.setStateLogin} />}></Route>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" render={(props) => <Login {...props} newStatus={this.setStateLogin} />}></Route>
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
