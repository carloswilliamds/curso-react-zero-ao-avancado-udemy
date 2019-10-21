import React, {Component} from 'react';
import firebase from '../../firebase'
import './style.css'
import {Link, withRouter} from "react-router-dom"

class Dashboard extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: "Carregando..."
      };
    
      this.sair = this.sair.bind(this);
    }

async componentDidMount(){
  if(!firebase.getCurrent()){
    this.props.history.replace("/login")
    return null;
  }

  firebase.getUserName((infos) =>{
    this.setState({nome: infos.val().nome})
  })
}

    sair = async () =>{
      firebase.signOut();
       this.props.history.push("/")

    }



    render(){
        return(
            <div className="dashboard">
              <div className="container">
                <h1>Painel</h1>
                <section className="box-user">
                  <h2>Olá {this.state.nome}</h2>
                  <div className="btn-action">
                  <Link to="/dashboard/new" className="new-post">Novo Post</Link>
                  <button onClick={this.sair} className="btn-sair">Deslogar</button>
                  </div>
                </section>
              </div>
                
            </div>
        )
    }
}

export default withRouter(Dashboard);