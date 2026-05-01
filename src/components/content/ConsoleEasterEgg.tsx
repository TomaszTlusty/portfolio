'use client'

import { useEffect } from 'react'

export default function ConsoleEasterEgg() {
    useEffect(() => {

        console.log(
            '%c _   _              _ \n' +
            '| | | |            | |\n' +
            '| |_| | ___ _   _  | |\n' +
            '|  _  |/ _ \\ | | | | |\n' +
            '| | | |  __/ |_| | |_|\n' +
            '\\_| |_/\\___||__, | (_)\n' +
            '             __/ |    \n' +
            '            |___/     \n',
            'color: #22c55e; font-family: monospace; font-size: 12px;'
        )
        console.log("---------------------------------------------------------------")
        console.log(
            '%cHej, widzę że lubisz grzebać w kodzie! 👋\n' +
            'Kod źródłowy: https://github.com/TomaszTlusty/portfolio\n' +
            'Napisz do mnie: kontakt@tlusty.dev',
            'color: #22c55e; font-size: 13px; font-family: monospace;'
        )
        console.log("---------------------------------------------------------------")
        console.log(
            '%cHey, I see you like digging through code! 👋\n' +
            'Source code: https://github.com/TomaszTlusty/portfolio\n' +
            'Get in touch: kontakt@tlusty.dev',
            'color: #22c55e; font-size: 13px; font-family: monospace;'
        )
        console.log("---------------------------------------------------------------")
    }, [])

    return null
}