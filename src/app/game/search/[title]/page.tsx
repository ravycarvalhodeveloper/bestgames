import Container from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Input from "@/components/input";
import GameCard from "@/components/GameCard";

async function getData(title: string) {
    try {
        const decodeTitle = decodeURI(title)
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`)
        return res.json();
    }catch(err) {

    }
}


export default async function Search({
    params: { title }
}: {
    params: { title: string}
}) {
    const games: GameProps[]  = await getData(title);


    return (
        <main className="w-full text-black">
            <Container>
                <Input/>
                <h1 className="font-bold text-xl mt-8 mb-5">Vejam o que encontramos na nossa base:</h1>

                {!games && (
                    <h1>Esse jogo não foi encontrado...</h1>
                )}

            <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {games && games.map((item) => (
                 <GameCard 
                    data={item}
                    key={item.id}
                 />
            ))}
          </section>

            </Container>
        </main>
    )
}