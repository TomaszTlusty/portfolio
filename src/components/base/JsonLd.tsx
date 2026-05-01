// src/components/base/JsonLd.tsx
export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Tomasz Tłusty",
        "url": "https://tlusty.dev",
        "image": "https://tlusty.dev/tlusty-avatar.png",
        "sameAs": [
            "https://github.com/TomaszTlusty",
            "https://www.linkedin.com/in/tlusty/",
        ],
        "jobTitle": "Full-Stack Developer & Hardware Maker",
        "description": "Full-Stack Developer specializing in Next.js, TypeScript, and embedded hardware (ESP32, PCB design). Interested in cybersecurity.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Stalowa Wola",
            "addressCountry": "PL",
        },
        "email": "kontakt@tlusty.dev",
        "knowsAbout": [
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "React",
            "ESP32",
            "PCB Design",
            "3D Printing",
            "Cybersecurity",
            "Linux",
        ],
        "knowsLanguage": [
            { "@type": "Language", "name": "Polish", "alternateName": "pl" },
            { "@type": "Language", "name": "English", "alternateName": "en" },
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Technikum - Kierunek Programista",
        },
        "worksFor": {
            "@type": "Organization",
            "name": "wasys.pl",
            "url": "https://wasys.pl",
        },
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Tomasz Tłusty Portfolio",
        "url": "https://tlusty.dev",
        "author": {
            "@type": "Person",
            "name": "Tomasz Tłusty",
        },
        "inLanguage": ["pl-PL", "en-US"],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    )
}