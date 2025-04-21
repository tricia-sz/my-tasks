import Image from "next/image";
import Link from "next/link";
import shape from "../../../public/shape2.svg";
export default function Header() {
  return(
    <>
      <header className="w-ful flex bg-pink-400 justify-center items-center py-4">
      <section className="w-5xl justify-center mx-auto">
        <nav className="flex justify-between items-center p-4">
          <Link href={"/"} className="flex gap-2 justify-center items-center">
            <h1 className="font-bold text-4xl">MyTasks</h1><span className="text-pink-700 text-7xl font-bold">+</span>
          </Link>
          <Link href="/" className="">
            Meu Painel
          </Link>
         <div className="justify-center items-center">
          <Link href="/" className="bg-black rounded-4xl px-6 py-2 text-white items-center justify-center">
              Acessar
          </Link>
         </div>
        </nav>
      </section>
    </header>
    <Image alt="shape" src={shape} className="w-full"/>
    </>
  )
}