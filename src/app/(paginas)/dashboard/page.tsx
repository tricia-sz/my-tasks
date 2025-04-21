"use client"
import Container from "@/components/shared/Container";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaShareAlt, FaTrash } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";
import {db} from "../../../services/firebaseConnection"
import {addDoc, collection} from "firebase/firestore"

interface HomeProprs {
  user: {
    email: string
  }
}

export default  function Dashboard({user}: HomeProprs){
  const { data, status } = useSession()
    if( status === "unauthenticated" ) {
     return  redirect("/")
    }

    const [input, setInput] = useState("")
    const [publicTask, setPublicTask] = useState(false)

    function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
      console.log(event.target.checked);
      setPublicTask(event.target.checked)
      
    }

    async function handleRegisterTask(event: FormEvent){
      event.preventDefault();

      if(input === "") return;

      try{
        await addDoc(collection(db, "tarefas"), {
          tarefa: input,
          created: new Date(),
          user: data?.user?.email,
          public: publicTask

        });

        setInput("");
        setPublicTask(false);

      } catch(err) {
        console.log(err);
        
      }
    }

  return (
      <Container>
       <div>
        <section className="mt-4">
          <h2 className="text-3xl font-bold text-center mb-2">Qual a tarefa?</h2>
          <form 
            action="" 
            className=""
            onClick={handleRegisterTask}
            >
            <Textarea  
              className="border-3 border-pink-400 h-20 bg-pink-100 placeholder:text-pink-400" 
              placeholder="Digite sua próxima tarefa"
              value={input}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)}
            />
            <div className="flex gap-2 mt-4 ">
             <input 
              type="checkbox"  
              checked={publicTask}
              onChange={handleChangePublic}
              className=" rounded-full w-6"/>
             <p className="font-medium text-normal">Tornar tarefa publica</p>
            </div>
          </form>
          <div className="justify-center mx-auto flex">
            <button className="px-4 py-2 rounded-full bg-pink-400 text-xl flex gap-2 mt-8">
              <MdOutlineAddTask size={24} className=""/> Add Tarefa
            </button>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl gap-2 font-bold text-center mb-8">Minhas Tarefas</h2>
          <article className="border-2 border-pink-300 rounded-md py-4 p-2 bg-pink-200 mb-4">
            <div className="flex gap-2 mb-4 ">
              <button className="  text-sx flex gap-2">
                <label htmlFor="" className="bg-pink-400 px-2 rounded-full">Público</label>
                <FaShareAlt size={24} className=""/> 
            </button>
            </div>
            <div className="w-full flex-col justify-center items-center pl-4">
              <span className="text-xl text-center font-medium justify-cente items-centerr">Titulo</span>
              <div className="flex justify-center items-center gap-4">
                <p> Dolorum asperiores voluptas ex eius, alias vitae assumenda ducimus eveniet. Aut doloremque ut at mollitia quam omnis ipsum debitis nemo, hic porro.</p>
                <div className="">
                <FaTrash size={24} className="text-pink-700"/> 
                </div>
              </div>
            </div>
            
          </article>
          <article className="border-2 border-pink-300 rounded-md py-4 p-2 bg-pink-200 mb-4">
            <div className="flex gap-2 mb-4 ">
              <button className="  text-sx flex gap-2">
                <label htmlFor="" className="bg-pink-400 px-2 rounded-full">Público</label>
                <FaShareAlt size={24} className=""/> 
            </button>
            </div>
            <div className="w-full flex-col justify-center items-center pl-4">
              <span className="text-xl text-center font-medium justify-cente items-centerr">Titulo</span>
              <div className="flex justify-center items-center gap-4">
                <p> Dolorum asperiores voluptas ex eius, alias vitae assumenda ducimus eveniet. Aut doloremque ut at mollitia quam omnis ipsum debitis nemo, hic porro.</p>
                <div className="">
                <FaTrash size={24} className="text-pink-700"/> 
                </div>
              </div>
            </div>
            
          </article>
        </section>
        
       </div>
      </Container>
    
  )
}