import React, {useState, useEffect} from "react";
import {Container, ContentMain, Form, SubmitButton, List, TitleRepo, DeleteButton} from '../../pages/Main/styles.js';
import {Link} from "react-router-dom";
import api from "../../services/api"

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
   
    },[match.params.repositorio]) // disparado quando receber um parametro
    console.log(repositorio, issues, loading)

    return(
        <Container>
            <ContentMain>
            <Link to="/" className="btn-voltar">Voltar</Link>
                        <h1 className="title"><span>{decodeURIComponent(match.params.repositorio)}</span></h1>
            </ContentMain>
        </Container>
    )
}

