import {FaGithub, FaLinkedin, FaXTwitter} from "react-icons/fa6";
import Link from "next/link";

const socials = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tlusty/",
        icon: FaLinkedin,
    },
    {
        label: "GitHub",
        href: "https://github.com/TomaszTlusty",
        icon: FaGithub,
    },
    {
        label: "Twitter / X",
        href: "https://x.com/TlustyTech",
        icon: FaXTwitter,
    },
];

function IconsBar() {
    return (
        <>
            {socials.map((social) => {
                const Icon = social.icon;

                return (
                    <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="rounded-xl transition-all duration-200 hover:scale-110 text-black/80 hover:text-black"
                    >
                        <Icon size={22} />
                    </Link>
                );
            })}
        </>
    );
}

export default IconsBar;
