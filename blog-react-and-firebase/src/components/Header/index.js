import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import "./style.css"

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            stateLogin: false,
            nome: "Carregando..."
        };

        this.sair = this.sair.bind(this);
        this.stateLogin = this.stateLogin.bind(this);


    }

    componentDidMount(){
        
        this.stateLogin()
        
        firebase.getUserName((infos) =>{
            this.setState({nome: infos.val().email})
          })
    }



    stateLogin(){
        if(firebase.getCurrent()){
            this.setState({
                stateLogin: true
            })
        }else{
            this.setState({
                stateLogin: false
            })
        }

    }

    sair(){
        firebase.signOut().then(() =>{
           this.stateLogin()
      
        })
    }

    render(){
        return(
            <header className="header">
                <div className="container">
                    <h1><Link to="/">Blog React.Js</Link></h1>
                    
                    { this.state.stateLogin ? "Logado como " + this.state.nome  : <Link to="login" className="link-page-login">Login</Link>}
                    { this.state.stateLogin && <button onClick={this.sair}>Sair</button>  }
                    
                </div>
            </header>
        )
    }
}

export default Home