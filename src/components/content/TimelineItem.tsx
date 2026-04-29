import { Experience } from "@/lib/schemas";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import Icon from "./Icon";
import { getTranslations } from 'next-intl/server';

interface Props {
  experience: Experience;
}

export default async function TimelineItem({ experience }: Props) {
  const t = await getTranslations('timeline');
  const { name, href, logo, positions } = experience;

  return (
    <li className="relative ml-10 py-4">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <Avatar className="size-12 border">
          <AvatarImage
            src={logo}
            alt={name}
            loading="lazy"
            decoding="async"
            className="bg-background object-contain"
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-1 flex-col justify-start gap-2">
        <Link href={href} target="_blank" rel="noreferrer" className="w-fit">
          <h3 className="text-base font-semibold leading-none">{name}</h3>
        </Link>
        <div className="flex flex-col gap-2">
          {positions.map((position) => (
            <div key={`${position.title}-${position.start}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm font-medium leading-none text-muted-foreground">
                  {position.title}
                </p>
                <time className="whitespace-nowrap pr-8 text-xs tabular-nums text-muted-foreground">
                  <span>{position.start}</span>
                  <span>{" - "}</span>
                  <span>{position.end ?? t('present')}</span>
                </time>
              </div>
              {position.description && (
                <ul className="ml-4 mt-2 list-outside list-disc">
                  {position.description.map((desc, i) => (
                    <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
              {position.links && position.links.length > 0 && (
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                  {position.links.map((link) => (
                    <Link href={link.href} key={link.href} target="_blank">
                      <Badge title={link.name} className="flex gap-2">
                        <Icon
                          name={link.icon}
                          aria-hidden="true"
                          className="size-3"
                        />
                        {link.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
