import React from 'react';

const AboutText = () => {
    return (
        <section className="mx-auto w-full max-w-3xl mt-16 ">
            <h2 className="text-2xl font-bold tracking-tight text-black ">
                O Mnie
            </h2>

            <p className={"mt-6 font-medium leading-relaxed text-black"}>
                Zajmuję się budowaniem rzeczy — od elektroniki na ESP32 i projektowania płytek PCB, po druk 3D i aplikacje webowe. Interesuję się cyberbezpieczeństwem, bo lubię rozumieć, jak systemy działają od środka i znajdować ich słabe punkty.
            </p>

            <p className={"mt-6 font-medium leading-relaxed text-black"}>
                W moich projektach używam głównie TypeScripta, Next.js i Tailwind CSS. Aktualnie siedzę na Fedorze 43 KDE Plasma, po dwóch latach używania Arch Linuxa z Hyprlandem.</p>

            <p className={"mt-6 font-medium leading-relaxed text-black"}>
                Poza tym gram w szachy, trenuję kickboxing i czytam o inżynierii oraz fizyce<br/>
                <span className={"mt-2"}>(Andrzej Dragan, GoF, Harvard Business Review)</span>
            </p>
        </section>
    );
};

export default AboutText;





