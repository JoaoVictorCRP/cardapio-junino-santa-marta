"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {useRef} from "react";

export default function Carousel({ children }) {
    const [sliderRef, slider] = useKeenSlider({
        loop: children.length >= 4,
        mode: "snap",
        draggable: true,
        slides: {
            perView: 4,
            spacing: 2,
            breakpoints: {
                "(min-width: 640px)": {
                    perView: 2.2,
                },
                "(min-width: 768px)": {
                    perView: 3,
                },
                "(min-width: 1024px)": {
                    perView: 4,
                },
            },
        },
    })

    return (
        <div className="relative w-full">
            {/* Botão Esquerdo */}
            { children.length >= 4 && <button
                onClick={() => slider.current?.prev()}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                aria-label="Anterior"
            >
                ◀
            </button>}

            {/* Carrossel */}
            <div ref={sliderRef} className="keen-slider px-2">
                {children.map((child, index) => (
                    <div className="keen-slider__slide min-w-2xl" key={index}>
                        {child}
                    </div>
                ))}
            </div>

            {/* Botão Direito */}
            { children.length >= 4 && <button
                onClick={() => slider.current?.next()}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                aria-label="Próximo"
            >
                ▶
            </button>}
        </div>
    )
}