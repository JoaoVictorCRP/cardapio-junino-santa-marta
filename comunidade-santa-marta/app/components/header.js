import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-primary shadow-md py-4 px-8 text-black">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Image
                        src="/logo.png"
                        width={100}
                        height={100}
                        alt="Comunidade Santa Marta"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">Comunidade Santa Marta</h1>
                </div>
                <p className="subtitle">Bem-vindo ao portal oficial da nossa comunidade!</p>
            </div>
        </header>
    )
}