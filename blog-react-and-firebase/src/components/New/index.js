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
            image: ""

        }

        this.cadastrarPost = this.cadastrarPost.bind(this);

    }

componentDidMount(){
    if(!firebase.getCurrent()){
        return this.props.history.push("/")
    }
}


cadastrarPost(e){
    e.preventDefault()
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
                    <p className="message-error"></p>
                    <form onSubmit={this.cadastrarPost}>
                        <label>Título</label>
                        <input type="text" placeholder="Digite seu E-mail" required value={this.state.title} onChange={(e) =>{ this.setState({title: e.target.value})}} />
                        
                        <label>Descrição</label>
                        <textarea type="text" placeholder="Digite sua Senha" required value={this.state.description} onChange={(e) =>{ this.setState({description: e.target.value})}}></textarea>
                        
                        <label>Imagem</label>
                        <input type="password" placeholder="Digite a url da imagem" required value={this.state.image} onChange={(e) =>{ this.setState({image: e.target.value})}} />
                        
                        <button type="submit" className="btn-form">Cadastrar</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(New)