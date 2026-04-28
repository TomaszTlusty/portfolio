import React from 'react';

const AboutText = () => {
    return (
        <section className="mx-auto w-full max-w-3xl mt-16 ">
            <h2 className="text-2xl font-bold tracking-tight text-black ">
                O Mnie
            </h2>

            <p className={"mt-6 font-medium leading-relaxed text-black"}>
                Zajmuję się projektowaniem i budowaniem systemów od podstaw — od elektroniki opartej na ESP32 i projektowania PCB, przez druk 3D, aż po aplikacje webowe. Łączę świat hardware i software, tworząc rozwiązania, które działają zarówno fizycznie, jak i cyfrowo.
            </p>

            <p className={"mt-6 font-medium leading-relaxed text-black"}>
                Na co dzień pracuję głównie w TypeScript, Next.js i Tailwind CSS, rozwijając nowoczesne aplikacje webowe. Interesuję się również cyberbezpieczeństwem, ponieważ lubię rozumieć, jak systemy działają „od środka”, a nie tylko jak wyglądają na powierzchni.
            </p>

            <p className={"mt-6 font-medium leading-relaxed text-black"}>
                Poza technologią gram w szachy i trenuję kickbox
            </p>
        </section>
    );
};

export default AboutText;