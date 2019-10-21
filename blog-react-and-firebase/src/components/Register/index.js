import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import "./style.css"

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            messageError: ""
        }


        this.makeRegister = this.makeRegister.bind(this);
        this.register = this.register.bind(this);

    }

componentDidMount(){
    if(firebase.getCurrent()){
        return this.props.history.replace("/dashboard")
    }
}

    register = async () =>{
        const {name ,email, password} = this.state;
      
        try{
            await firebase.register(name, email, password).then( () =>{
                this.setState({messageError: "Logando..."})
                this.props.history.replace("/dashboard")
            }).catch((error) =>{
                console.log(error)
                if(error.code === "auth/wrong-password"){
                    this.setState({messageError: "Senha incorreta"})
                } else if(error.code === "auth/email-already-in-use"){
                    this.setState({messageError: "Usuario já existe"})
    
                } else{

                    this.setState({messageError: error.code})
                }
            })

        }catch(error){
            alert(error);
        }
        

    }

    
    makeRegister(e){
        e.preventDefault()
        this.register()
    }

    

    render(){
        return(
            <div className="page-register">
                <div className="container">
                    <div className="form-container">
                    <h1>Cadastro</h1>
                    <p className="message-error">{this.state.messageError}</p>
                    <form onSubmit={this.makeRegister}>
                        
                        <label>Nome</label>
                        <input type="text" placeholder="Digite seu Nome" required value={this.state.name} onChange={(e) =>{ this.setState({name: e.target.value})}} />
                        
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu E-mail" required value={this.state.email} onChange={(e) =>{ this.setState({email: e.target.value})}} />
                        
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua Senha" required value={this.state.password} onChange={(e) =>{ this.setState({password: e.target.value})}} />
                        
                        <button type="submit" className="btn-form">Cadastrar</button>
                        
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)