"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { useEffect, useId, useRef, useState } from "react";

interface SlideData {
    title: string;
    button: string;
    src: string;
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        const loop = () => {
            const el = cardRef.current;
            if (el) {
                el.style.setProperty("--x", `${xRef.current}px`);
                el.style.setProperty("--y", `${yRef.current}px`);
            }
            frameRef.current = requestAnimationFrame(loop);
        };
        frameRef.current = requestAnimationFrame(loop);
        return () => {
            if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = cardRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        xRef.current = e.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = e.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    return (
        <li className="flex-none w-full h-full flex items-center justify-center box-border px-[4vmin]">
            {/* card centered, constrained to container with max-w */}
            <div
                ref={cardRef}
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative max-w-full max-w-[70vmin] h-[70vmin] rounded-[1%] overflow-hidden text-white [perspective:1200px] [transform-style:preserve-3d]"
                style={{
                    transform:
                        current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                    transformOrigin: "bottom",
                }}
            >
                {/* background image layer (uses CSS variables for parallax translation) */}
                <div
                    className="absolute inset-0 transition-all duration-150 ease-out"
                    style={{
                        transform:
                            current === index
                                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                                : "none",
                    }}
                >
                    <img
                        src={slide.src}
                        alt={slide.title}
                        onLoad={(ev) => (ev.currentTarget.style.opacity = "1")}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                    />
                    {current === index && <div className="absolute inset-0 bg-black/30" />}
                </div>

                {/* content on top */}
                <article
                    className={`relative z-10 p-[3vmin] transition-opacity duration-700 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">{slide.title}</h2>
                    <div className="flex justify-center">
                        <button className="mt-6 px-4 py-2 w-fit text-black bg-white h-12 rounded-2xl">
                            {slide.button}
                        </button>
                    </div>
                </article>
            </div>
        </li>
    );
};

type ControlType = "previous" | "next";
interface CarouselControlProps {
    type: ControlType;
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => (
    <button
        aria-label={title}
        onClick={handleClick}
        className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 rounded-full transition-transform duration-200 ${type === "previous" ? "rotate-180" : ""
            }`}
    >
        <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
);

interface CarouselProps {
    slides?: SlideData[];
    initialIndex?: number;
}

export default function Carousel({ slides = [], initialIndex = 0 }: CarouselProps) {
    const id = useId();
    const [current, setCurrent] = useState(() => Math.max(0, initialIndex ?? 0));

    if (!slides.length) {
        return <div className="w-full h-64 flex items-center justify-center">No slides</div>;
    }

    const prev = () => setCurrent((c) => (c - 1 < 0 ? slides.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c + 1 >= slides.length ? 0 : c + 1));
    const goto = (i: number) => setCurrent(i);

    return (
        <div
            className="relative max-w-[70vmin] h-[70vmin] mx-auto overflow-hidden"
            aria-labelledby={`carousel-heading-${id}`}
        >
            {/* ul takes slides.length * 100% so each li (w-full) is exact page */}
            <ul
                className="flex h-full transition-transform duration-800 ease-in-out list-none m-0 p-0"
                style={{
                    width: `${slides.length * 100}%`,
                    transform: `translateX(-${(current * 100) / slides.length}%)`,
                }}
            >
                {slides.map((s, i) => (
                    <Slide key={i} slide={s} index={i} current={current} handleSlideClick={goto} />
                ))}
            </ul>

            <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
                <CarouselControl type="previous" title="Go to previous slide" handleClick={prev} />
                <CarouselControl type="next" title="Go to next slide" handleClick={next} />
            </div>
        </div>
    );
}
