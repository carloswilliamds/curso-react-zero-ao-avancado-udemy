import React , { Component } from 'react';
import firebase from './firebaseConection'

import './App.css'

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      cadastroName: null, 
      cadastroEmail: null,
      cadastroSenha: null,
      loginNome: null,
      loginEmail: null,
      loginSenha: null,
      lista: []
    }

    this.cadastrar = this.cadastrar.bind(this);
    this.login = this.login.bind(this);
    this.deslogar = this.deslogar.bind(this);

    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        alert("Usuario logado com suceso!")
        this.setState({
          loginEmail: user.email
        })
        
      }
    })


  }

  // Insert novo valor
  // firebase.database().ref("ativo").set("sim cadastrou")

  // receber valor do banco 
  // firebase.database().ref("token").once("value", (snapshot) => {
  //   let state = this.state;
  //   state.token = snapshot.val();
  //   this.setState(state);
  // });

  // pega valor do banco em tempo real
  // firebase.database().ref("usuarios").child("1").on("value", (snapshot) => {
  //   let state = this.state;
  //   state.nome = snapshot.val().nome;
  //   state.idade = snapshot.val().idade;
  //   this.setState(state)
  // })

  cadastrar(e){
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(this.state.cadastroEmail, this.state.cadastroSenha).then().catch((er) =>{
      if(er.code === "auth/invalid-email"){
        alert("E-mail Invalido");
      } else if(er.code === "auth/email-already-in-use"){
       alert("E-mail ja esta sendo utilizado") 
      } else{
        alert(er.code)
      }
    })
  }

  
  login(e){
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.loginSenha).then().catch((er) =>{
      if(er.code === "auth/invalid-email"){
        alert("E-mail Invalido");
      } else if(er.code === "auth/email-already-in-use"){
       alert("E-mail ja esta sendo utilizado") 
      } else{
        alert(er.code)
      }
    })
  }

  deslogar(){
    firebase.auth().signOut().then(
      alert("deslogado")
    )

    this.setState({
      loginEmail: null
    })
  }

  render(){

    return(
      <div className="container">
        <div className="form-cadastrar"> 
            <div>
              <h2>Logado com email: {this.state.loginEmail}</h2>
              <button onClick={this.deslogar}>Deslogar</button>
            </div>
        <h2>Cadastro</h2>
          <form onSubmit={this.cadastrar}>
          {/* <form onSubmit={() => this.cadastrar(e.target)}> */}

            <input type="text" placeholder="Nome" value={this.cadastroNomel} onChange={(e) => {this.setState({cadastroNome: e.target.value})}} />
            <input type="text" placeholder="E-mail" value={this.cadastroEmail} onChange={(e) => {this.setState({cadastroEmail: e.target.value})}} />            
            <input type="text" placeholder="Senha" value={this.cadastroSenha} onChange={(e) => {this.setState({cadastroSenha: e.target.value})}} />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className="form-login">
        <h2>Login</h2>
        <form onSubmit={this.login}>
          {/* <form onSubmit={() => this.cadastrar(e.target)}> */}

            <input type="email" placeholder="E-mail" value={this.loginEmail} onChange={(e) => {this.setState({loginEmail: e.target.value})}} />            
            <input type="text" placeholder="Senha" value={this.loginSenha} onChange={(e) => {this.setState({loginSenha: e.target.value})}} />
            <button type="submit">Cadastrar</button>
          </form>
        </div>

      </div>
    );
  }

}

// function App() {
//   return (
//     <div className="container">
//       Carlos William
//     </div>
//   );
// }

// export default App;
