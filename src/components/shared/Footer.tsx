import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import shape from "../../../public/shape2.svg"
import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <Image alt="shape" src={shape} className="w-full rotate-180" />
      <header className="w-ful flex bg-pink-400 justify-center items-center">
        <div className="">
          <nav className="">
            <Link href={"/"} className="flex gap-2 justify-center items-center">
              <h1 className="font-bold text-4xl text-pink-950">MyTasks</h1><span className="text-black text-7xl font-bold">+</span>
            </Link>
          </nav>
          <Link href={`https://tricia-sz.netlify.app/`} target="blank" rel="external" className="">
                  <span className="text-sm text-black bg-Inc-950  font-mono  w-full flex items-center justify-center tracking-wide hover:text-purple-500 cursor-pointer ">
                    Developed by Parícia Souza{" "}
                    <span className="text-white px-2">
                        <FaHeart size={18} color="" />
                    </span>{" "}
                    2025
                  </span>
            </Link>
        </div>
      </header>
    </>
  )
}