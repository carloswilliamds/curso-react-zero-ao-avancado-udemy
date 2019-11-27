import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import "./style.css"

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            messageError: ""
        }


        this.makeLogin = this.makeLogin.bind(this);
        this.login = this.login.bind(this);

    }

componentDidMount(){
    if(firebase.getCurrent()){
        return this.props.history.replace("/dashboard")
    }
}

    login = async () =>{
        const {email, password} = this.state;
      
        try{
            await firebase.login(email, password).then( () =>{
                this.setState({messageError: "Logando..."})
                this.props.newStatus()
                console.log(this.props.newStatus, "login bb")
                this.props.history.replace("/dashboard")
            }).catch((error) =>{
                console.log(error)
                if(error.code === "auth/wrong-password"){
                    this.setState({messageError: "Senha incorreta"})
                } else if(error.code === "auth/user-not-found"){
                    this.setState({messageError: "Usuario não existe"})
    
                }
            })

        }catch(error){
            alert(error);
        }
        
    }


    
    makeLogin(e){
        e.preventDefault()
        this.login()

    }

    

    render(){
        return(
            <div className="page-login">
                <div className="container">
                    <div className="form-container">
                    <h1>Login</h1>
                    <p className="message-error">{this.state.messageError}</p>
                    <form onSubmit={this.makeLogin}>
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu E-mail" required value={this.state.email} onChange={(e) =>{ this.setState({email: e.target.value})}} />
                        
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua Senha" required value={this.state.password} onChange={(e) =>{ this.setState({password: e.target.value})}} />
                        
                        <button type="submit" className="btn-form">Login</button>
                        <p className="text-footer">Não possui cadastro ? faça seu <Link to="/register">cadastro</Link></p>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)