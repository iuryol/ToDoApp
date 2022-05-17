import React from "react";
import Post from "../components/Post";
import { Link } from '@inertiajs/inertia-react'

export default (props)=>{
    function getNotes(){
        return props.posts.map((note)=>{
            return(
                <Post key={note.id} titulo={note.title} conteudo={note.content} id={note.id} />
            )               
        })
    }

   
    return(
        <div className="flex flex-col   flex-wrap bg-yellow-100 p-5 h-screen" id="main">

            <div className="flex flex-col justify-center">

            <div className="" id="header">
                    <h1 className="text-center text-[40px] bg-[#ffcc5c] rounded-sm">Minhas notas</h1>
            </div>

            <div className=" flex flex-row justify-center bottom mt-2" id="buttons">
                <Link className="bg-red-200 border-red-600 border-2 rounded-md p-2 shadow-md text-red-500" href="/create" method="get" >Criar Nota</Link>
            </div>

            <div className="mt-2 h-full flex flex-row  flex-wrap justify-center" id="posts">
                {getNotes()}
            </div>

            </div>
            

            
        </div>
    )
}