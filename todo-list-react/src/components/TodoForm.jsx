import { useState } from "react"


const TodoForm = (addTodo) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value,category);
        setValue("")
        setCategory("")
        //limpar os campos
        
    }

    return (
        <div className='todo-form'>
            <h2>Criar Tarefa:</h2>
            {/* // adiciona a função do handleSubmit ao enviar o formulario */}
            <form onSubmit={handleSubmit}> 
                <input 
                value={value}
                type="text" 
                placeholder='Digite o Título' 
                onChange={(e) => setValue(e.target.value)} />
                <select
                onChange={(e) => setCategory(e.target.value)}
                value={value}>
                    <option value="" >Selecione a categoria</option>
                    <option value="Trabalho" >Trabalho</option>
                    <option value="Pessoal" >Pessoal</option>
                    <option value="Estudos" >Estudos</option>
                </select>
                <button type='submit'>CRIAR</button>
            </form>
        </div>
    )
}

export default TodoForm