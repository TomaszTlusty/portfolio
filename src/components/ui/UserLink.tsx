import React from 'react';
import Link from "next/link";
import {LinksType} from "@/types/LinksType"



const UserLink = ({href,title,icon}: LinksType) => {
    return (
        <div>
            <Link
                href={href}
                target={"_blank"}
                className="flex items-center text-sm gap-2 font-semibold hover:text-black w-fit bg-mintcream/80 text-black/80 rounded-3xl py-0.5 px-3 hover:translate-x-1 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            >
                <span>{title}</span>
                {icon}
            </Link>
        </div>
    );
};

export default UserLink;