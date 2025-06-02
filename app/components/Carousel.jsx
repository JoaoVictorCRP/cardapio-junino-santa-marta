"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Carousel({ children }) {
    const [sliderRef] = useKeenSlider({
        loop: true,
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
        <div ref={sliderRef} className="keen-slider px-2">
            {children.map((child, index) => (
                <div className="keen-slider__slide min-w-2xl" key={index}>
                    {child}
                </div>
            ))}
        </div>
    )
}