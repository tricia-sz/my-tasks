"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import shape from "../../../public/shape2.svg";
export default function Header() {

  const { data: session, status } = useSession()

  return (
    <>
      <header className="w-ful flex bg-pink-400 justify-center items-center py-4">
        <nav className="w-5xl justify-center mx-auto md:flex md:justify-between md:items-center">
          <div className="">
            <Link href={"/"} className="flex gap-2 justify-center items-center">
                <h1 className="font-bold text-4xl">MyTasks</h1><span className="text-pink-700 text-7xl font-bold">+</span>
              </Link>
          </div>
          <div className="flex justify-center mt-4">
          {
              session?.user && (
                <div className="justify-center items-center">
                  <Link href="/dashboard" className="bg-pink-700 rounded-4xl px-6 py-2 text-black font-medium items-center justify-center">
                    Meu Painel
                  </Link>
                </div>
              )
            }
          </div>
          <div className="flex justify-center items-center p-4 gap-4 mt-4">
            {
              status === "loading" ? (
                <> <span><FaSpinner size={28} className="animate-spin" /></span> </>

              ) : session ? (
                <button className=" bg-black  rounded-4xl px-6 py-2 text-white"
                  onClick={() => signOut()}>
                  Olá, <span className="text-pink-400 font- text-xl">{session.user?.name}</span>
                </button>
              ) : (
                <div className="justify-center items-center">
                  <button
                    className="bg-black rounded-4xl px-6 py-2 text-white items-center justify-center flex gap-2"
                    onClick={() => signIn()}>

                    <RiLoginCircleLine size={24} /> Entrar
                  </button>
                </div>
              )
            }
          </div>
        </nav>
      </header>
      <Image alt="shape" src={shape} className="w-full" />
    </>
  )
}