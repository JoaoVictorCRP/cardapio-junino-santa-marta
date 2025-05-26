import Image from "next/image";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";

export default function Header() {
    return (
        <header className="bg-white shadow-sm py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center space-x-3">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            width={60}
                            height={60}
                            alt="Comunidade Santa Marta"
                        />
                        <h1 className="text-2xl font-bold text-primary ml-2">
                            Comunidade Santa Marta
                        </h1>
                    </Link>
                </div>

                <div className="hidden md:block"> {/* Esconde em telas pequenas, mostra em telas médias/grandes */}
                    <p className="text-secondary text-lg font-medium">
                        O portal oficial da nossa comunidade!
                    </p>
                </div>

                <nav className="hidden lg:block"> {/* Esconde em telas pequenas/médias, mostra em telas grandes */}
                    <ul className="flex space-x-8">
                        <li>
                            <Link href="/" className="text-text-color hover:text-secondary font-semibold transition-colors duration-200">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/nossa-historia" className="text-text-color hover:text-secondary font-semibold transition-colors duration-200">
                                Nossa História
                            </Link>
                        </li>
                        <li>
                            <Link href="/galeria" className="text-text-color hover:text-secondary font-semibold transition-colors duration-200">
                                Galeria
                            </Link>
                        </li>
                        <li>
                            <Link href="/programacao" className="text-text-color hover:text-secondary font-semibold transition-colors duration-200">
                                Programação
                            </Link>
                        </li>
                        <li>
                            <Link href="/eventos" className="text-text-color hover:text-secondary font-semibold transition-colors duration-200">
                                Eventos
                            </Link>
                        </li>
                        <li>
                            <Link href="/contato" className="text-text-color hover:text-secondary font-semibold transition-colors duration-200">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button className="lg:hidden text-text-color text-2xl">
                    <CgMenu/>
                </button>
            </div>
        </header>
    )
}