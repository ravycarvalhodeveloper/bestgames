import { GameProps } from "@/utils/types/game";
import { redirect } from "next/navigation";
import Image from "next/image";
import Container from "@/components/container";
import Label from "./components/label";
import GameCard from "@/components/GameCard";
import { Metadata } from "next";


interface PropsParams {
    params :{ 
        id: string;
    }
}

export async function generateMetada({ params }:PropsParams): Promise<Metadata> {
    try{
        const response: GameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`, {next: {revalidate: 60}})
        .then((res) => res.json())
        .catch(()=> {
            return {
                title: "Games - Descubra jogos incríveis para se divertir."
            }
        })

        return {
            title: response.title,
            openGraph: {
                title: response.title,
                images: [response.image_url]
            }

        }


        }catch(err) {
        return {
            title: "Games - Descubra jogos incríveis para se divertir."
        }
    }
}

async function getData(id: string) {
    try{
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {cache: "no-store"})
        return res.json();
        }catch(err) {
        throw new Error("Failed to fetch")
    }
}


async function getGamesSorted() {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {cache: "no-store"})
        return res.json();
    }catch(err) {
        throw new Error("Failed to fetch")
    }
}



export default async function Game({
    params: {id}
}: {
    params: {id: string}
}) {
    const data: GameProps = await getData(id)
    const sortedGame:GameProps = await getGamesSorted();


    if(!data) {
        redirect("/")
    }

    return (
        <main className="w-full text-black">
           <div className="bg-black h-80 sm:h-96 w-full relative">
            <Image
                className="object-cover w-full h-80 sm:h-96 opacity-80"
                alt={data.title}
                src={data.image_url}
                priority={true}
                quality={100}
                fill={true}
                sizes="(max-width: 768px) 100vh, (max-width: 1200px) 44vw"
                />
           </div> 

           <Container>
                <h1 className="font-bold text-xl my-4">{data.title}</h1>
                <p>{data.description}</p>


                <h2 className="font-bold text-lg mt-7 mb-2">Plataformas:</h2>
                <div className="flex gap-2 flex-wrap">
                    {data.platforms.map((item) => (
                        <Label name={item} key={item}/>
                    ))}
                </div>



                <h2 className="font-bold text-lg mt-7 mb-2">Categorias:</h2>
                <div className="flex gap-2 flex-wrap">
                    {data.categories.map((item) => (
                        <Label name={item} key={item}/>
                    ))}
                </div>

                <p className="mt-7 mb-2"><strong>Data de lançamento:</strong>{data.release}</p>

                <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado:</h2>
                <div className="flex">
                    <div className="flex-grow">
                        <GameCard 
                            data={sortedGame}                      
                        />
                    </div>
                </div>

           </Container>
        </main>
    )
}