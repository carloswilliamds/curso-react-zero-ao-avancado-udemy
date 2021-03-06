import React, {Component} from 'react';


class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre userName={this.props.nome} userCargo={this.props.cargo} userIdade={this.props.idade} />
                <Social youtube={this.props.youtube} />
                <hr />
            </div>
        )
    }
}



const Sobre = (props) => {
    return(
        <div>
            <h1>Instrutor: {props.userName}</h1>
            <h2>Idade: {props.userIdade}</h2>
            <h2>Cargo: {props.userCargo}</h2>
        </div>
    )
}

const Social = (props) => {

    if(props.youtube){
        return(
            <div>
                <a href={props.youtube}>Youtube</a><br/>
                <a href={props.facebook} >Facebook</a><br/>
                <a href={props.instagram} >Intagram</a><br/>
            </div>
        )
    } else{ 

        return(
            <div>
               Não tem Youtube
            </div>
        )
    }

}

function App(){
    return(
 
        <div>
            <h1>Day Game Brasil</h1>
            <Equipe nome="Carlos" cargo="Front-End" idade="22 Anos" youtube="https://www.youtube.com/" />
            <Equipe nome="Felipe" cargo="Analista" idade="28 Anos" />

        </div>
 
    );
}

export default App;
