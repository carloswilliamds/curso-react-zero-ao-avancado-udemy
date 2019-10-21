import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import "./style.css";

class New extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            image: "",
            messageError: ""

        } 

        this.cadastrarPost = this.cadastrarPost.bind(this);

    }

componentDidMount(){
    if(!firebase.getCurrent()){
        return this.props.history.push("/")
    }
}


cadastrarPost = async(e) =>{
    e.preventDefault()

    if(this.state.title !== "" && this.state.image !== "" && this.state.description !== ""  ){
        let post = firebase.firebaseApp.ref("post");
        let chave = post.push().key;
        await post.child(chave).set({
            titulo: this.state.title,
            imagem: this.state.image,
            descricao: this.state.description,
            autor: localStorage.nome
        })

        this.props.history.push("/dashboard")
    } else{
        this.setState({
           messageError: "Atenção: Preencha todos os campos."
        })
    }
}
    

    render(){
        return(
            <div className="page-new-post">
                <div className="container">
                    <div className="btn-action">
                        <Link to="/dashboard">Voltar</Link>
                    </div>
                    <div className="form-container">
                    <h1>Novo Post</h1>
                    <p className="message-error">{this.state.messageError}</p>
                    <form onSubmit={this.cadastrarPost}>
                        <label>Título</label>
                        <input type="text" placeholder="Digite o título" required value={this.state.title} onChange={(e) =>{ this.setState({title: e.target.value})}} />
                        
                        <label>Descrição</label>
                        <textarea type="text" placeholder="Descrição" required value={this.state.description} onChange={(e) =>{ this.setState({description: e.target.value})}}></textarea>
                        
                        <label>Imagem</label>
                        <input type="text" placeholder="Cole a url da imagem"  value={this.state.image} onChange={(e) =>{ this.setState({image: e.target.value})}} />
                        
                        <button type="submit" className="btn-form">Cadastrar</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(New)