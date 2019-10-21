import React, { Component } from 'react'
import firebase from "../../firebase"
import "./style.css"

class Home extends Component {

    state = {
        lista: []
    }





    componentDidMount(){
        firebase.firebaseApp.ref("post").once("value", (snapshot) =>{
           let state = this.state;

            state.lista = [];
            
            snapshot.forEach((post) => {
                console.log(post.key)
                state.lista.push({
                    key: post.key,
                    titulo: post.val().titulo,
                    image: post.val().imagem,
                    descricao: post.val().descricao,
                    autor: post.val().autor
                })
            })
            state.lista = state.lista.reverse()
            this.setState(state)
    })
    }

    render(){
        return(
           <section className="posts">
               <div className="container">
                  {this.state.lista.map((post) =>{
                      return(
                        <article className="post" key={post.key}>
                            <h1>{post.titulo}</h1>
                            <h2>{post.autor}</h2>
                            <img src={post.image} alt="post" />
                            <section className="descricao">
                                <p>{post.descricao}</p>
                            </section>
                        </article>
                      )
                  })}
               </div>
           </section>
        )
    }
}

export default Home