import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-primary shadow-md pt-1 pb-1 text-black">
            <div className="max-w-6xl mx-auto flex items-center justify-between text-light">
                <div className="flex items-center space-x-4">
                    <Image
                        src="/logo.png"
                        width={100}
                        height={100}
                        alt="Comunidade Santa Marta"
                    />
                    <h1 className="text-xl font-bold">Comunidade Santa Marta</h1>
                </div>
            </div>
        </header>
    )
}