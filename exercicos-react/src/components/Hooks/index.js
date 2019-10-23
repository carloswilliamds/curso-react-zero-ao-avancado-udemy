import  React, { useState, useEffect, useMemo, useCallback } from 'react'

function Hooks(){
    const [tarefas, setTarefas] = useState([]);
    const [texto, setTexto] = useState()
    const numerosDeItens = useMemo(() =>{
       return  tarefas.length
    },[tarefas])


    const handleAdd = useCallback(() =>{
        setTarefas([...tarefas, texto])
        setTexto("")
    }, [tarefas, texto])
    
    function handleRemoveAll(){
        localStorage.removeItem("localTarefas");
        setTarefas([])
    }

    useEffect(() =>{
        if(localStorage.localTarefas){
            let storageTasks = JSON.parse(localStorage.localTarefas);
            setTarefas(storageTasks);
        }
    },[]);

    useEffect(() =>{
        let localTasks = JSON.stringify(tarefas);

        localStorage.setItem("localTarefas", localTasks);
    }, [tarefas])

 
    return(
        <div>
            <ul>
                {tarefas.map(tarefa =>(
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <p>Essa lista tem {numerosDeItens} itens.</p>
            <button type="button" onClick={handleAdd}>Adicionar</button>
            <button type="button" onClick={handleRemoveAll}>Deletar a porra toda</button>

            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
        </div>
    )
}

export default Hooks