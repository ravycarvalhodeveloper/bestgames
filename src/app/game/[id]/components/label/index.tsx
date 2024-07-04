
interface LabelProps {
    name: string;
}

export default function Label({name}: LabelProps) {
    return (
        <div
            className="flex-grow py-1 px-3 bg-slate-200 text-black 
            text-center rounded-lg hover:font-bold duration-200 sm:flex-grow-0"
        >
            {name}
        </div>
    )
}