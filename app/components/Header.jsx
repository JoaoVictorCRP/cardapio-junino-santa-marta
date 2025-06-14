"use client"
import Image from "next/image";
import Link from "next/link";
import {CgClose, CgMenu} from "react-icons/cg";
import {useState} from "react";

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

            </div>
        </header>
    )
}