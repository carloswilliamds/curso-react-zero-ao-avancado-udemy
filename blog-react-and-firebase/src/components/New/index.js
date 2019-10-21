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
            image: null,
            url: "",
            messageError: "",
            progress: 0

        } 

        this.cadastrarPost = this.cadastrarPost.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);


    }

    handleFile = async(e) =>{

        if(e.target.files[0]){
            const image = e.target.files[0];
            if(image.type === "image/png" || image.type === "image/jpeg"){

               await this.setState({
                    image: image
                })

                this.handleUpload()

                if(this.messageError !== ""){
                    this.setState({
                        messageError: ""
                    })
                }

            } else{
                this.setState({
                    messageError: "Selecione um JPG ou PNG",
                    image: null
                })
            }
        }
    }

    handleUpload = async() =>{

        const {image} = this.state
        const getUserUid = firebase.getUserUid();
        const uploadTask = firebase.storage
        .ref(`images/${getUserUid}/${image.name}`)
        .put(image)

        await uploadTask.on("state_changed", (snapshot) =>{

            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({
                progress: progress
            })

        },(error) => {
            alert(error)
        },() =>{
            firebase.storage.ref(`images/${getUserUid}`).child(image.name).getDownloadURL().then( (url) =>{
                this.setState({url: url})
                console.log(url);
            })
        })

    }

componentDidMount(){
    if(!firebase.getCurrent()){
        return this.props.history.push("/")
    }
}


cadastrarPost = async(e) =>{
    e.preventDefault()

    if(this.state.title !== "" 
    && this.state.image !== null 
    && this.state.url !== ""
    && this.state.description !== ""   ){
        let post = firebase.firebaseApp.ref("post");
        let chave = post.push().key;
        await post.child(chave).set({
            titulo: this.state.title,
            imagem: this.state.url,
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
                        
                        <label>Selecione a image:</label>
                        <input type="file"  onChange={this.handleFile} />

                        <div className="box-preview">
                            {this.state.progress !== 100 &&  this.state.progress !== 0 && 
                            <progress max="100" value={this.state.progress} />
                            }
                            <br />
                            {this.state.url !== "" &&
                            <img src={this.state.url} alt="preview image" width="200px" height="150px" />
                            }
                        </div>
                        
                        <button type="submit" className="btn-form">Cadastrar</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(New)