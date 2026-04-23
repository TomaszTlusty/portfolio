import Image from "next/image";
import Link from "next/link";
import { SlDocs } from "react-icons/sl";
import IconsBar from "@/components/content/IconsBar";

export default function Hero() {
    return (

        <section className="hero max-w-3xl w-max-sm sm:max-w-xl gap-6 mx-auto justify-center items-center sm:items-start mt-32 flex flex-col-reverse sm:flex-row ">
            <div className={"w-[50%] max-w-[50%] flex flex-col"}>
                <h1 className="text-3xl font-bold tracking-tight text-black">
                    Tomasz Tłusty
                </h1>

                <h2 className="mt-2 text-sm sm:text-lg font-semibold text-black">
                    Web Developer | Tarnobrzeg 🇵🇱
                </h2>

                <p className="mt-4 font-medium leading-relaxed text-black sm:w-full max-w-xl">
                    Projektuję. Koduję. Wdrażam.
                </p>

                <div className="flex flex-row mt-7.5 items-center gap-2">
                    <Link
                        href={"/cv"}
                        className="flex items-center text-sm gap-2 font-semibold  hover:text-black w-fit bg-mintcream/80 border-2 border-black text-black/80 rounded-3xl py-0.5 px-3 hover:translate-x-1 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                    >
                        <span>CV</span>
                        <SlDocs className="text-xs transition-all duration-150" />
                    </Link>
                    <div className="flex flex-row gap-2">
                        <IconsBar/>
                    </div>
                </div>
                <Link
                    href={"/cv"}
                    className="flex items-center text-sm gap-2 font-semibold mt-2 hover:text-black w-fit bg-mintcream/80 border-2 border-black text-black/80 rounded-3xl py-0.5 px-3 hover:translate-x-1 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                >
                    <span>Napisz do mnie </span>
                    <SlDocs className="text-xs transition-all duration-150" />
                </Link>
            </div>
            <div className={"w-[50%] max-w-[50%]"}>
                <Image src={"/tlusty.png"} alt={"Selfie Tomasza"} width={400} height={250} className={"rounded-3xl"} />
            </div>
        </section>
    );
};

