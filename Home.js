import React,{useState} from 'react';
import {FiTrash2,FiCheckCircle} from "react-icons/fi";

function Home() {
const[Tasks,setTasks]=useState([]);
//input task
const[inputTask,setInputTask]=useState("");

//add task 
const addnewTask=title=>{
    if(title !=="")
    {
        //lastid
        const lastid=Tasks.length === 0 ? 0 :Tasks[Tasks.length-1].id;
        const newTask={id:lastid+1,title:title,completed:false};
        setTasks([...Tasks,newTask]);
        setInputTask("");
    }
};
//remove task
const removeTask=(id)=>{
    setTasks((prevtask)=>{
       return prevtask.filter((Tasks)=>Tasks.id !==id);
        });
    
};
  return (
    <div>
        <h1 className=' text-4xl font-extrabold py-5'>Task Management App</h1>
        {/* buttons */}
        <section className=' flex flex-col items-center justify-center mt-3'>
            <input 
            type='text'
            placeholder='Add New Task'
            className=' border-2 border-orange-400 p-2 m-2 w-60 rounded-md'
            value={inputTask}
            onChange={(e)=>setInputTask(e.target.value)}
            />
            <button 
            onClick={()=>addnewTask(inputTask)}
            className=' bg-green-400 p-2 m-2 w-60 rounded-md'>
                Add Task +
            </button>
        </section>
        <section className=' p-5 border-t-4 m-5'>
            {Tasks &&
                Tasks.map((Tasks)=>(
                    
                        <div
                        key={Tasks.id}
                        className='flex flex-row items-center justify-center gap-4'
                        >
                            <p 
                            className={
                                Tasks.completed
                                ? " bg-green-400 p-2 m-2 rounded-nd"
                                : " bg-purple-400 p-2 m-2 rounded-nd"
                            }>
                                {
                                Tasks.completed ? Tasks.title +"(completed)":Tasks.title
                            }
                            </p>
                            <div 
                            onClick={()=>removeTask(Tasks.id)}
                            className=' p-3 bg-red-500 rounded-md cursor-pointer text-white'
                            >
                                <FiTrash2/>
                        </div>
                        <div 
                        onClick={()=>{
                            setTasks(Tasks.map((item)=>{
                                if(item.id == Tasks.id){
                                    return {...item,completed:true};
                                }
                                return item;
                            }));
                        }}
                        className=' p-3 bg-red-500 rounded-md cursor-pointer text-white'>
                            <FiCheckCircle/>
                        </div>
                        </div>
                    
                ))
            }
        </section>
    </div>
  );
}

export default Home