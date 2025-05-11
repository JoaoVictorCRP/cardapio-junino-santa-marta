import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="text-center bg-secondary text-white h-12 outline-solid outline-accent pt-2">
            <ul className="flex place-content-evenly text-xl font-bold">
                <Link href="/" className="hover:opacity-70 w-30">
                    <li>
                        <p>Início</p>
                    </li>
                </Link>

                <Link href="/" className="hover:opacity-70 w-auto">
                    <li>
                        <p>Nossa história</p>
                    </li>
                </Link>

                <Link href="/" className="hover:opacity-70 w-auto">
                    <li>
                        <p>Galeria</p>
                    </li>
                </Link>

                <Link href="/" className="hover:opacity-70 w-auto">
                    <li>
                        <p>Programação</p>
                    </li>
                </Link>

                <Link href="/" className="hover:opacity-70 w-auto">
                    <li>
                        <p>Eventos</p>
                    </li>
                </Link>

                <Link href="/contato" className="hover:opacity-70 w-auto">
                    <li>
                        <p>Contato</p>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}