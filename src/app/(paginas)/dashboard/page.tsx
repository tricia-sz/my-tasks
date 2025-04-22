"use client"
import Container from "@/components/shared/Container";
import { Textarea } from "@/components/ui/textarea";
import {  useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaShareAlt, FaTrash } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";
import { db } from "../../../services/firebaseConnection"

import {
  addDoc,
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import Link from "next/link";


interface HomeProprs {
  user: {
    email: string
  }
}

interface TaskProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}

  export default function Dashboard() {

    const { data, status } = useSession()
    if (status === "unauthenticated") {
      return redirect("/")
    }

    const [input, setInput] = useState("");
    const [publicTask, setPublicTask] = useState(false);
    const [tasks, setTasks] = useState<TaskProps[]>([]);
  
    useEffect(() => {
      async function loadTarefas() {
        const tarefasRef = collection(db, "tarefas");
        const q = query(
          tarefasRef,
          orderBy("created", "desc"),
          where("user", "==", data?.user?.email)
        );
  
        onSnapshot(q, (snapshot) => {
          let lista = [] as TaskProps[];
  
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              tarefa: doc.data().tarefa,
              created: doc.data().created,
              user: doc.data().user,
              public: doc.data().public,
            });
          });
  
          setTasks(lista);
        });
      }
  
      loadTarefas();
    }, [data?.user?.email]);
  
    function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
      setPublicTask(event.target.checked);
    }
  
    async function handleRegisterTask(event: FormEvent) {
      event.preventDefault();
  
      if (input === "") return;
  
      try {
        await addDoc(collection(db, "tarefas"), {
          tarefa: input,
          created: new Date(),
          user: data?.user?.email,
          public: publicTask,
        });
  
        setInput("");
        setPublicTask(false);
      } catch (err) {
        console.log(err);
      }
    }
  

  return (
    <Container>
      <div>
          <main className="">
            <section className="">
              <div className="">
                <h1 className="text-3xl text-center font-medium mb-4">Qual sua tarefa?</h1>

                <form onSubmit={handleRegisterTask}>
                  <Textarea
                    placeholder="Digite  sua próxima tarefa..."
                    value={input}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                      setInput(event.target.value)
                    }
                    className="bg-pink-200 border-1 border-pink-500 placeholder:text-pink-400"
                  />
                  <div className="mt-2 flex gap-2">
                    <input
                      type="checkbox"
                      checked={publicTask}
                      onChange={handleChangePublic}
                      className="w-5"
                    />
                    <label className="text-pink-700">Tornar tarefa publica?</label>
                  </div>

                  <button className="justify-center items-center mx-auto flex px-4 py-2 bg-pink-400 rounded-full gap-2" type="submit">
                   <MdOutlineAddTask size={24} className=""/> Criar Tarefa
                  </button>
                </form>
              </div>
            </section>

            <section className="mt-8">
              <h1 className="text-3xl text-center font-medium mb-4">Minhas tarefas</h1>

              {tasks.map((item) => (
                <article key={item.id} className="">
                  {item.public && (
                    <div className="mb-2 justify-center">
                      <label className="bg-pink-400 px-3 rounded-full ">Público</label>
                      <button className="">
                        <FaShareAlt size={22} className="text-gray-900" />
                      </button>
                    </div>
                  )}

                  <div className="bg-pink-200 rounded-md p-2 flex justify-between mb-4 border-1 border-pink-400">
                    {
                      item.public ? (
                        <Link href={`/task/${item.id}`} >
                          <p>{item.tarefa}</p>
                        </Link>
                      ): (
                        <p>{item.tarefa}</p>

                      )
                    }
                    <button className="">
                      <FaTrash size={24} className="text-pink-700" />
                    </button>
                  </div>
                </article>
              ))}
            </section>
          </main>
      </div>
    </Container>

  )
}

