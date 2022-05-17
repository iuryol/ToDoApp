import React, { useState } from "react";
import { Link} from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

export default () => {
    const [values, setValues] = useState({title: "",content: ""})

    function handleChange(e){
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
        ...values,
        [key]: value,
    }))
    }

    

    function handleSubmit(e){
        e.preventDefault();
        Inertia.post('/store',values);
        
    }

    return (
        <div className="flex flex-col place-items-center bg-yellow-100 h-screen p-5">
            <h1 className="text-[40px] bg-[#ffcc5c] rounded-sm w-full text-center mb-5">Nova nota</h1>
            <form id="create-note" onSubmit={handleSubmit} className="flex flex-col min-w-[240px] max-w-[360px] bg-[#88d8b0] border-2 border-[#88d8b0] overflow-hidden  ">
                <label className="flex flex-col text-center">
                    Título:
                    <input id="title" onChange={ handleChange} className="outline-0" type="text" name="title" value={values.title}/> 
                </label>
                <label className="flex flex-col text-center">
                    Conteudo:
                    <textarea id="content" onChange={ handleChange} value={values.content} className="outline-0" name='content'>   </textarea>
                </label>
                
            </form>
            <div className="flex flex-row mt-2">
            <button form='create-note'  className="bg-red-200 border-red-600 border-2 rounded-md p-2 shadow-md text-red-500 mr-2" type="submit" value="Salvar" > Salvar </button>
            <Link className="bg-red-200 border-red-600 border-2 rounded-md p-2 shadow-md text-red-500" href="/" method="get" >Voltar</Link>
            </div>
            
        </div>
    )
}