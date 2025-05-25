import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-sm py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo e Nome da Comunidade */}
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

                {/* Frase de Boas-Vindas ou Navegação Principal */}
                <div className="hidden md:block"> {/* Esconde em telas pequenas, mostra em telas médias/grandes */}
                    <p className="text-secondary text-lg font-medium">
                        O portal oficial da nossa comunidade!
                    </p>
                </div>

                {/* Menu de Navegação - agora na parte superior direita */}
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

                {/* Adicionar um ícone de menu hamburger para mobile (ex: Heroicons) */}
                <button className="lg:hidden text-text-color text-2xl">
                    {/* Você pode usar um ícone como <Bars3Icon className="h-6 w-6" /> do @heroicons/react */}
                    ☰ {/* Exemplo simples, substitua por um ícone de verdade */}
                </button>
            </div>
        </header>
    )
}