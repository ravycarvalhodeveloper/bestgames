import Container from "@/components/container";
import Image from "next/image";
import  userImage from "../../../public/profile.jpg"
import { FaShareAlt } from "react-icons/fa";
import { PiGearSixBold } from "react-icons/pi";


import FavoriteCard from "./favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meu perfil - Daly Games sua plataforma de jogos!",
    description: "Perfil Frederico Antonio"
}

export default function Profile() {
    return (
        <main className="w-full text-black">
           <Container>
                <section className="mt=8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
                    <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-rol justify-center sm:justify-normal">
                        <Image 
                            src={userImage}
                            alt="Imagem perfil do usuário"
                            className="rounded-full w-56 h-56 object-cover"
                        />
                        <h1 className="font-bold text-2xl">Frederico Antonio</h1>
                    </div>


                    <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">
                        <button className="bg-gray-700 px-4 py-3 rounded-lg text-white font-bold"><PiGearSixBold size={24} color="#fff"/></button>
                        <button className="bg-gray-700 px-4 py-3 rounded-lg"><FaShareAlt size={24} color="#fff"/></button>
                    </div>
                </section>



                <section className="flex flex-wap gap-5 flex-col md:flex-row">
                        <div className="flex-grow flex-wrap">
                            <FavoriteCard/>
                        </div>
                        <div className="flex-grow flex-wrap">
                            <FavoriteCard/>
                        </div>
                        <div className="flex-grow flex-wrap">
                            <FavoriteCard/>
                        </div>
                </section>



           </Container>
        </main>
    )
}