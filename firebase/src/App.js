import React , { Component } from 'react';
import firebase from './firebaseConection'

import './App.css'

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      token:"...",
      inputName: null, 
      inputIdade: null,
      lista: []
    }

    this.cadastrar = this.cadastrar.bind(this);

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

firebase.database().ref("usuarios").on("value", snapshot =>{
  let state = this.state;
  state.lista = [];

  snapshot.forEach((item) =>{
    state.lista.push({
      key: item.key,
      nome: item.val().nome,
      idade: item.val().idade
    })
  })

  this.setState(state);
})
  }

  cadastrar(e){
    e.preventDefault();

    let usuarios = firebase.database().ref("usuarios");
    let chave = usuarios.push().key;

    usuarios.child(chave).set({
      nome: this.state.inputName,
      idade: this.state.inputIdade
    })
  }

  

  render(){

    return(
      <div className="container">

      {
        this.state.lista.map((item) =>{
          return(
            <article key={item.key}>
              <h5>Chave: {item.key}</h5>
              <h5>Nome: {item.nome}</h5>
              <h5>idade: {item.idade}</h5>
              
            </article>
          );
        })
      }


      <form onSubmit={this.cadastrar}>
          <input type="text"  onChange={(e) =>{
            this.setState({
              inputName: e.target.value
            })
          }} />
          <input type="text" onChange={(e) =>{
            this.setState({
              inputIdade: e.target.value
            })
          }} /><br></br>
          <button type="submit">Cadastrar no firebase filhao</button>
          <br></br>
      </form>

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
