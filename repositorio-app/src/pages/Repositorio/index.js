import React, {useState, useEffect} from "react";
import {Container, ContentMain, Form, SubmitButton, List, TitleRepo, DeleteButton, Owner, Loading, IssuesList, PagesActions, FilterList} from '../../pages/Main/styles.js';
import {Link} from "react-router-dom";
import api from "../../services/api"
import {FaSpinner} from "react-icons/fa"

export default function Repositorio({match}){

    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [filters, setFilters] = useState([
        {state: "all", label: "Todas", active: true},
        {state: "open", label: "Abertas", active: false},
        {state: "closed", label: "Fechadas", active: false},
        
    ])
    const [filterIndex, setFilterIndex] = useState(0);


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
                        state: filters.find(f => f.active).state,
                        per_page: 5
                    }
                })
            ])

            setIssues(issuesData.data);
            setRepositorio(repositorioData.data);
            setLoading(false)
            // console.log(repositorio, issues)
            console.log(match.params.repositorio)
        }

        load();
    },[]) // disparado quando receber um parametro
    // console.log(repositorio, issues, loading)   

    useEffect(() =>{

        async function loadIssues(){
            const nomeRepo = decodeURIComponent(match.params.repositorio);

            const response = await api.get(`/repos/${nomeRepo}/issues`, {
                params:{
                    state: filters[filterIndex].state,
                    page: page,
                    per_page: 5
                }
            });

            setIssues(response.data);

        }

        loadIssues()

    }, [match.params.repositorio, page, filterIndex, filters])


    function handlePage(action){
        let pageNew = action === "next" ? page + 1 : page -1;
        console.log(pageNew, page)
        setPage(pageNew)
    }


    function handleFilter(index){
        setFilterIndex(index);
    }

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

            <FilterList active={filterIndex}>
                {filters.map((filter, index) => (
                    <button type="button" key={filter.label} onClick={() => handleFilter(index)}>{filter.label}</button>
                ))}
            </FilterList>

            <IssuesList>
                {issues.map(issue => (
                    <li key={String(issue.id)}>
                        <img src={issue.user.avatar_url} alt={issue.user.login} />
                        <div className="infos-issue">
                        <h3>{issue.user.login}</h3>
                            <div className="title-and-name">
                                <a href={issue.html_url} target="_blank">{issue.title}</a>
                            
                                <div>
                                    {issue.labels.map(label =>(
                                        <span key={String(label.id)}>{label.name}</span>
                                    ))}
                                </div>
                            </div>                            
                        </div>
                    </li>
                ))}
            </IssuesList>

            <PagesActions>
                <button type="button" disabled={ page < 2} onClick={()=> handlePage("back")}>Voltar</button>
                <button type="button" onClick={()=> handlePage("next")}>Proxima</button>
            </PagesActions>

        </Container>
    )    
    



}

    

