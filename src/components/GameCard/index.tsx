

import Link from "next/link"
import Image from "next/image"
import { BiRightArrowCircle } from "react-icons/bi"
import { GameProps } from "@/utils/types/game"


interface GameCardProps {
    data:GameProps
}

export default function GameCard({data}: GameCardProps) {
    return (
        <Link href={`/game/${data.id}`}>
            <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
                <div className="relative w-full h-56 rounded-lg hover:scale-105 transition-all duration-300">
                    <Image 
                        src={data.image_url}
                        alt={data.title}
                        fill={true}
                        quality={100}
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vh, (max-width: 1200px) 44vw"
                    />
                </div>

                <div className="flex items-center mt-4 justify-between">
                    <p className="text-sm font-bold px-2 text-black text-ellipsis truncate white-nowap overflow-hidden">{data.title}</p>
                    <BiRightArrowCircle size={24} color="#0284c7"/>
                </div>
            </section>
        </Link>
    )
}