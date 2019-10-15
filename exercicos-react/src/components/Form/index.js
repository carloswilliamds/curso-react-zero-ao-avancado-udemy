import React, {Component} from "react"

class Form extends Component{

        constructor(props){
            super(props);
            this.state = {
                email: "seu@email.com",
                password: "12fbd",
                sexo: "masculino",
                user: "",
                emailDois: "",
                cargo: ""
            }

            this.mudarEmail = this.mudarEmail.bind(this);
            this.zerarPadrao = this.zerarPadrao.bind(this);
            this.mudarSenha = this.mudarSenha.bind(this);
            this.mudarSexo = this.mudarSexo.bind(this);
            this.exibir = this.exibir.bind(this);
        }

        mudarSexo(e){
            this.setState({
                sexo: e.target.value
            })
        }

        mudarEmail(e){
            let valorDigitado = e.target.value;
            this.setState({
                email: valorDigitado
            })
        }

        mudarSenha(e){
            let valorDigitado = e.target.value;
            this.setState({
                password: valorDigitado
            })
        }

        zerarPadrao(e){
            if(e.target.value === "seu@email.com"){
                this.setState({
                    email: ""
                })
            }
        }

        exibir(e){
            e.preventDefault();
            const {user, emailDois, cargo} = this.state;
            alert(`User: ${user} \nE-mail: ${emailDois} \nCargo: ${cargo}`);
        }

    render() {
        return (
            <div>
                <h1>Form Cadastro</h1>
                <form onSubmit={this.exibir}>
                    <label>User</label>
                    <input type="text" value={this.state.user} onChange={(e) => this.setState({user: e.target.value})}></input><br /><br />
                    <label>E-mail</label>
                    <input type="email" value={this.state.emailDois} onChange={(e) => this.setState({emailDois: e.target.value})}></input><br /><br />
                    <label>Cargo</label>
                    <input type="text" value={this.state.cargo} onChange={(e) => this.setState({cargo: e.target.value})}></input><br /><br />
                    <button type="submit">Exibir dados</button>

                </form>


                <h1>Form</h1>
                E-mail:
                <input type="email" name="email" value={this.state.email} onFocus={this.zerarPadrao} onChange={this.mudarEmail} />
                <h3>{this.state.email}</h3>
                <br />
                Senha:
                <input type="password" name="senha" value={this.state.password} onChange={this.mudarSenha} />
                <h3>{this.state.password}</h3>
                <select value={this.state.sexo} onChange={this.mudarSexo}>
                    <option value="masculino">Masculino HTML</option>
                    <option value="feminino">Feminino HTML</option>
                </select>
                <h3>{this.state.sexo}</h3>

            </div>
        );
    }
}

export default Form