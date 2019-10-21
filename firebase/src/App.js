import React , { Component } from 'react';
import firebase from './firebaseConection'

import './App.css'

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      cadastroNome: "", 
      cadastroEmail: "",
      cadastroSenha: "",
      loginEmail: "",
      loginSenha: "",
      lista: []
    }

    this.cadastrar = this.cadastrar.bind(this);
    this.login = this.login.bind(this);
    this.deslogar = this.deslogar.bind(this);

    firebase.auth().signOut();

    firebase.auth().onAuthStateChanged((user) =>{
    firebase.database().ref("usuarios").child(user.uid).set({
      nome: this.state.cadastroNome
    })
    .then(() => {
      
      this.setState({
        cadastroEmail: "",
        cadastroSenha: "",
        cadastroNome: ""
      })
      alert(this.state.cadastroEmail)
    })

    
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


    firebase.auth().createUserWithEmailAndPassword(this.state.cadastroEmail, this.state.cadastroSenha).then().catch((er) =>{
      if(er.code === "auth/invalid-email"){
        alert("E-mail Invalido");
      } else if(er.code === "auth/email-already-in-use"){
       alert("E-mail ja esta sendo utilizado") 
      } else{
        alert(er.code)
      }
    })
    e.preventDefault();

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
          <form onSubmit={(e) => {this.cadastrar(e)}}>
          {/* <form onSubmit={() => this.cadastrar(e.target)}> */}

            <input type="text" placeholder="Nome" value={this.state.cadastroNome} onChange={(e) => this.setState({cadastroNome: e.target.value})} />
            <input type="text" placeholder="E-mail" value={this.state.cadastroEmail} onChange={(e) => this.setState({cadastroEmail: e.target.value})}/>            
            <input type="text" placeholder="Senha" value={this.state.cadastroSenha} onChange={(e) => this.setState({cadastroSenha: e.target.value})} />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className="form-login">
        <h2>Login</h2>
        <form onSubmit={this.login}>
          {/* <form onSubmit={() => this.cadastrar(e.target)}> */}

            <input type="email" placeholder="E-mail" value={this.state.loginEmail} onChange={(e) => this.setState({loginEmail: e.target.value})} />            
            <input type="text" placeholder="Senha" value={this.state.loginSenha} onChange={(e) => this.setState({loginSenha: e.target.value})} />
            <button type="submit">Login</button>
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
