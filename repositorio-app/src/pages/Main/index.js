import React, {useState, useCallback, useEffect} from "react";
import {Container, ContentMain, Form, SubmitButton, List, TitleRepo, DeleteButton} from './styles.js'
import {FaGithub, FaPlus, FaSpinner, FaTrash, FaBars} from 'react-icons/fa/'
import api from '../../services/api'

export default function Main(){

    const [newRepo, setNewRepo] = useState("");
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("Você ainda não tem nenhum repositório");

    function handleInputChange(e){
        setNewRepo(e.target.value)
    }

    const handleDelete = useCallback((repoDelete) =>{
        let find = repositorios.filter(r => r.name !== repoDelete)
        setRepositorios(find);

        try{

            if(repositorios.length <= 1){
                throw new Error("Todos Repositórios foram deletado!");
            } 
        }catch(error){
            setTitle(error.message)
        }
  

    },[repositorios])

    // useEffect(() =>{
        
    //     localStorage.repositorios = [JSON.stringify(repositorios)];
    //     console.log(JSON.stringify(repositorios), repositorios)
    //     console.log(JSON.parse(localStorage.getItem(repositorios)))

    // },[repositorios])


   const handleSubmit =  useCallback(

    (e) => {

            e.preventDefault();
            setLoading(true);

                async function handleSubmitCallback(){
                    try{

                        if(newRepo == ""){
                            throw new Error("Preencha o campo acima para adicionar");
                        }
                    
                    let hasRepo =  repositorios.find(r => r.name === newRepo);
                    
                        if(hasRepo){
                            throw new Error("Esse repostório já foi adicionado.")
                        }
                    const response =  await api.get(`repos/${newRepo}`)
                    const data =  {
                        name: response.data.full_name,
                    }
                    setRepositorios([...repositorios, data])            
                        

                     
                    setNewRepo("")
                    console.log(response)
                } catch(error){
                    console.log(error)
                    setTitle(error.message)
                } finally{
                    setLoading(false);
                }

            }

            handleSubmitCallback()
        },
        [setRepositorios, newRepo, repositorios] // acredito que nao preciso do setRepo...
        )

    return(
        <Container>
            <ContentMain>
                <h1 className="title"><FaGithub />Repositórios</h1>
            </ContentMain>

            <Form onSubmit={() =>{}}>
                <input
                 type="text" 
                 placeholder="Adicionar Repositorios"
                 value={newRepo}
                 onChange={handleInputChange}
                 
                 />
                <SubmitButton onClick={handleSubmit} loading={loading ? 1 : 0}>

                    {loading ? 
                    <FaSpinner> </FaSpinner>
                    :
                    <FaPlus> </FaPlus>
                    }
                </SubmitButton>
            </Form>

            <TitleRepo>{title}</TitleRepo>

                {JSON.parse(localStorage.getItem("repositorios")) || repositorios.length > 0 &&
                <List>
                    {repositorios.map(repo => (
   
                        <li key={Math.random()}>

                            <div>
                            <DeleteButton onClick={() =>{ handleDelete(repo.name)}}>
                                <FaTrash></FaTrash>
                            </DeleteButton>
                            <span className="name-repo">{repo.name}</span>
                            </div>
                            <a>
                                <FaBars></FaBars>
                            </a>
                        </li>
                    ))}
                </List>
                 }
        </Container>
    )
}

