# Curso React do Zero ao Avançado 
https://www.udemy.com/course/curso-reactjs/ <br />

Exercícios e projetos realizados durante o curso<br/>

## Índice

- **[Exercícios com react](#%C3%ADndice)**
- Firebase
- Blog React e firebase

## Exercícios com react
Praticando os conceitos do reactjs.
[Arquivos](https://github.com/carloswilliamds/curso-react-zero-ao-avancado-udemy/tree/master/exercicos-react)
![TESTE](https://octodex.github.com/images/yaktocat.png)
```javascript
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
```

## Firebase
Testes com o banco de dados Firebase.

## blog-react-and-firebase
Projeto utilizando React e Firebase.

## repositorio-app
Projeto utilizando React Hooks e Styled Components.
