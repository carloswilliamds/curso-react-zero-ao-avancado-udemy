import React, {useState, useEffect} from "react";
import {Container, ContentMain, Form, SubmitButton, List, TitleRepo, DeleteButton, Owner, Loading} from '../../pages/Main/styles.js';
import {Link} from "react-router-dom";
import api from "../../services/api"
import {FaSpinner} from "react-icons/fa"

export default function Repositorio({match}){
    console.log(match.params.repositorio)

    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function load(){
            const nomeRepo = decodeURIComponent(match.params.repositorio)


            // Executa uma de cada vez
            // const response = await api.get(`repos/${nomeRepo}`);
            // console.log(response)
            // const issues = await api.get(`repos/${nomeRepo}/issues`)
            // console.log(issues)

            // Promise.all Executa ao mesmo tempo
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`repos/${nomeRepo}`),
                api.get(`repos/${nomeRepo}/issues`,{
                    params:{
                        state: "closed",
                        per_page: 5
                    }
                })
            ])

            setIssues(issuesData.data);
            setRepositorio(repositorioData.data);
            setLoading(false)
            // console.log(repositorio, issues)
        }

        load()
   
    },[]) // disparado quando receber um parametro
    console.log(repositorio, issues, loading)




    if(loading){
        return(
         <Loading>
             <h1>Carregando</h1>
             <FaSpinner></FaSpinner>
         </Loading>
        )
     } 

    return(
        <Container>
            <ContentMain page="repositorio">
            <Link to="/" className="btn-voltar">Voltar</Link>
                        <h1 className="title"><span>{decodeURIComponent(match.params.repositorio)}</span></h1>
            </ContentMain>

            <Owner>
                <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>

            </Owner>

        </Container>
    )    
    



}

    

