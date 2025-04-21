import Image from "next/image";
import hero from "../../../public/hero.png"
import Container from "@/components/shared/Container";
export default function Home() {
  return (
    <Container className="">
      <div className="flex-col mx-auto justify-center items-center">
        <h1 className="text-4xl text-center mb-4 font-black text-pink-400 mt-8">My Tasks</h1>
        <main className="flex-col py-4 items-center mx-auto justify-center">
          <div className="flex justify-center mb-12">
            <Image alt="hero" src={hero}/>
          </div>
          <div className="flex-col justify-center items-center mx-auto gap-4">
            <p className="text-center text-4xl font-bold mb-4 mt-4">sistema feito para voce organizar suas tarefas</p>
            <div className="flex gap-4 justify-center mx-auto mt-12">
              <button className="px-4 bg-pink-400 rounded-3xl py-2 text-xl">+12 Posts</button>
              <button className="px-4 bg-pink-400 rounded-3xl py-2 text-xl">+90 Comentarios</button>
            </div>
          </div>
        </main>

        </div>
    </Container>
  );
}
