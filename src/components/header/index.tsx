import Link from "next/link"
import { LiaGamepadSolid } from "react-icons/lia"

export default function Header() {
    return (
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
                <nav className="flex justify-center items-center gap-4">
                    <Link href="/">
                         <h1 className="font-black text-2xl text-sky-600">
                                Best<span className="font-bold text-slate-600">Games</span>
                         </h1>
                    </Link>

                    <Link href="/">
                        Jogos
                    </Link>

                    <Link href="/profile">
                        Profile
                    </Link>
                </nav>

                <div className="hidden sm:flex justify-center items-center">
                    <Link href="/profile">
                        <LiaGamepadSolid size={34} color="#0284c7"/>
                    </Link>
                </div>

            </div>
        </header>
    )
}