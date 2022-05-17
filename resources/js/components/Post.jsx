import React from "react";
import { Inertia } from '@inertiajs/inertia'
export default (props) => {
    function handlerClick(){
        const data ={id:props.id}
       Inertia.post('/destroy',data)
    }

    return(

        
        <div id="card" className=" flex flex-col rounded-sm border-2 border-[#88d8b0] shadow-md overflow-hidden min-w-[240px] max-w-[240px] min-h-[180px]   bg-[#88d8b0] m-1 ">
            <div className="text-white flex justify-center rounded-sm">
                <h2>{props.titulo}</h2>
            </div>
            <div className="bg-white p-2 flex flex-col  flex-grow text-center ">
                <h2>{props.conteudo}</h2>
               
            </div>
            <div className="bg-white flex flex-row justify-end ">

                <span onClick={handlerClick} className="hover:">
                <svg className="hover:fill-red-600" fill="	#ff6f69" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>
                </span>
            
                
            </div>
        </div>
    
    )

}