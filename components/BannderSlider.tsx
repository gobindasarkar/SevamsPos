"use client";

import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Slider, { Settings } from "react-slick";
import Image from "next/image";

type Slide = {
    id: number;
    src: string;
    alt: string;
};
const slides: Slide[] = [
    { id: 1, src: "/hero-banner-1.jpg", alt: "Slide 1" },
    { id: 2, src: "/hero-banner-2.jpg", alt: "Slide 2" },
];

export default function BannerSlider() {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide) => (
                <div key={slide.id} className="relative w-full h-[200px]">
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority
                        className="object-cover rounded-xl w-full h-full"
                    />
                </div>
            ))}
        </Slider>
    );
}
