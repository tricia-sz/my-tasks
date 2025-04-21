"use client"
import Container from "@/components/shared/Container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";

export default  function Dashboard(){
  const { status } = useSession()
    if( status === "unauthenticated" ) {
     return  redirect("/")
    }
  return (
      <Container>
       <div>
        <section className="mt-4">
          <h2 className="text-3xl font-bold text-center mb-2">Qual a tarefa?</h2>
          <form action="" className="">
            <Textarea  className="border-3 border-pink-400 h-20 bg-pink-100 placeholder:text-pink-400" placeholder="Digite sua próxima tarefa"/>
            <div className="flex gap-2 mt-4 ">
             <input type="checkbox"  className=" rounded-full w-6"/>
             <p className="font-medium text-xl">Tornar tarefa publica</p>
            </div>
          </form>
          <div className="justify-center mx-auto flex">
            <button className="px-4 py-2 rounded-full bg-pink-500 text-xl flex gap-2 mt-8">
              <MdOutlineAddTask size={24} className=""/> Add Tarefa
            </button>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl gap-2 font-bold text-center mb-8">Minhas Tarefas</h2>
          <article className="border-2 border-pink-300 rounded-md py-4 p-2 mb-4 bg-pink-200">
            <div className="flex gap-2 py-2">
              <button className="px-2 rounded-full bg-pink-400 text-sx flex gap-2">
                <label htmlFor="">Público</label>
            </button>
            <FaShareAlt size={24} className=""/> 
            </div>
            <div>
              <p> Dolorum asperiores voluptas ex eius, alias vitae assumenda ducimus eveniet. Aut doloremque ut at mollitia quam omnis ipsum debitis nemo, hic porro.</p>
            </div>
          </article>
          <article className="border-2 border-pink-300 rounded-md py-4 p-2 bg-pink-200">
            <div className="flex gap-2 py-2">
              <button className="px-2 rounded-full bg-pink-400 text-sx flex gap-2">
                <label htmlFor="">Público</label>
            </button>
            <FaShareAlt size={24} className=""/> 
            </div>
            <div>
              <p> Dolorum asperiores voluptas ex eius, alias vitae assumenda ducimus eveniet. Aut doloremque ut at mollitia quam omnis ipsum debitis nemo, hic porro.</p>
            </div>
          </article>
        </section>
        
       </div>
      </Container>
    
  )
}