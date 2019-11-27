import React, { Component } from 'react'
import "./style.css"

class TodoItens extends Component{


    constructor(props){
        super(props);
        this.state = {};

        this.deletar = this.deletar.bind(this);
         
    }


    deletar(key){

        this.props.delete(key);
    }

    render(){
        return(
            <div>
                {this.props.lista.map((item) =>{
                    
                    return(
                        <li key={item.key} onClick={() => this.deletar(item.key)}>{item.text}</li>
                    );

                }
                
                )}
            </div>
        )
    }
}

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            itens: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.log = this.log.bind(this);

    }

    addItem(e){
        e.preventDefault();
        if(this._tarefaInput.value !== ''){

            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            }

            console.log(newItem);
            this.setState({
                itens: [...this.state.itens, newItem]
            })

            this.setState({
                tarefa: ''
            })

        }

  
    }
    
    deleteItem(key){
        let filtro = this.state.itens.filter((item) =>{
            return(
                item.key !== key
            );
        });

        this.setState({itens: filtro})
    }

    log(){
        console.log(this.state.itens);
    }

    render(){
        return(
            <div className="todo">
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="nova tarefa" name="tarefa" value={this.state.tarefa} onChange={ (e) => this.setState({ tarefa: e.target.value})}
                    ref={ (e) => this._tarefaInput = e }  />
                <button type="submit">Adicionar</button>
                <button onClick={this.log}>Log</button>

                </form>
                <TodoItens lista={this.state.itens} delete={this.deleteItem}></TodoItens>
            </div>
        );
    }
}

export default Todolist
